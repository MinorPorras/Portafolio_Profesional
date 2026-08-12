import { Resend } from "resend";
import type { ContactRequestBody } from "../../src/types/common.ts";

// Inicializamos Resend con la variable de entorno que configuraremos en Netlify
const resend = new Resend(process.env.RESEND_API_KEY);

// Función para escapar caracteres HTML peligrosos
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, subject, message, honeypot, startTime } =
      (await req.json()) as ContactRequestBody;

    // FILTRO HONEYPOT: Si el campo trampa tiene texto, es un bot.
    if (honeypot) {
      return new Response(JSON.stringify({ success: true, message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // FILTRO DE TIEMPO: Si se envía en menos de 3 segundos (3000ms), es un bot.
    const timeTaken = Date.now() - (startTime || 0);
    if (timeTaken < 3000) {
      return new Response(JSON.stringify({ success: true, message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validar campos requeridos
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "El correo no tiene un formato válido" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Enviar el correo usando la API de Resend
    const response = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["minorp1415@protonmail.com"],
      replyTo: email,
      subject: `[Contacto Portafolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4A5568;">Nuevo mensaje desde tu Portafolio</h2>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 15px 0;" />
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Correo de contacto:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Asunto:</strong> ${safeSubject}</p>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 15px 0;" />
          <h3>Mensaje:</h3>
          <p style="white-space: pre-wrap; background: #F7FAFC; padding: 15px; border-radius: 8px;">${safeMessage}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(
      JSON.stringify({ error: "Error interno al enviar el mensaje" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
