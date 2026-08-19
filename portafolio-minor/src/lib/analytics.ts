type PostHog = typeof import("posthog-js").default;

let instance: PostHog | null = null;

// Inicialización diferida de PostHog: una sola vez, tras el load y con el main thread libre
export async function initAnalytics(): Promise<void> {
  if (instance) return;

  // Dynamic import: PostHog vive en un chunk separado, fuera del bundle inicial
  const { default: posthog } = await import("posthog-js");

  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    autocapture: true,
    persistence: "memory",
    disable_surveys: true,

    disable_session_recording: true,
    session_recording: {
      maskAllInputs: true,
      maskInputOptions: { password: true, email: false },
    },
    loaded: (ph) => {
      if (import.meta.env.DEV) {
        ph.opt_out_capturing();
      }
    },
  });

  instance = posthog;
  startRecordingOnInteraction();
}

// Grabación bajo demanda: el recorder solo se descarga ante el primer
// scroll/click/tecla. Lighthouse (que no interactúa) nunca lo carga.
function startRecordingOnInteraction(): void {
  const start = () => instance?.startSessionRecording();
  ["scroll", "click", "keydown"].forEach((event) =>
    window.addEventListener(event, start, { once: true, passive: true }),
  );
}

export function track(event: string, props?: Record<string, unknown>): void {
  instance?.capture(event, props);
}

export function identify(id: string, props?: Record<string, unknown>): void {
  instance?.identify(id, props);
}