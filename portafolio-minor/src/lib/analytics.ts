type PostHog = typeof import("posthog-js").default;

let instance: PostHog | null = null;

//Inicializaciónd e posthog de forma diferida, llamandose una sola ves despues del load y cuando el main thread se encuentre libre
export async function initAnalytics(): Promise<void> {
  if (instance) return;
  //Dynamic import envia posthog en un chunk separado, no en el bundle principal.
  const { default: posthog } = await import("posthog-js");
  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    autocapture: true,
    //Privacidad, sin cookies, localStorage, ni banner de cookies
    persistence: "memory",
    //Descarivar la captura de inputs, de passwords y datos sendisibles del form
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
      maskInputOptions: {
        password: true,
        email: false,
      },
    },
    // No rastrear en localhost
    loaded: (ph) => {
      if (import.meta.env.DEV) {
        ph.opt_out_capturing();
      }
    },
  });
  instance = posthog;
}

//Envía un evento con nombre, usarlo pasa puntos claves de UX
export function track(event: string, props?: Record<string, unknown>): void {
  instance?.capture(event, props);
}

export function identify(id: string, props?: Record<string, unknown>): void {
  instance?.identify(id, props);
}
