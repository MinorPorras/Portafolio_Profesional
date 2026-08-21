import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { ContactRequestBody } from "../src/types/common";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, honeypot, startTime } = (req.body ??
    {}) as ContactRequestBody;

  // FILTRO HONEYPOT
  if (honeypot) {
    return res.status(200).json({ success: true, message: "OK" });
  }

  // FILTRO DE TIEMPO (< 3s = bot)
  const timeTaken = Date.now() - (startTime || 0);
  if (timeTaken < 3000) {
    return res.status(200).json({ success: true, message: "OK" });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "El correo no tiene un formato válido" });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  try {
    const response = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["minorp1415@protonmail.com"],
      replyTo: email,
      subject: `[Contacto Portafolio] ${safeSubject}`,
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

    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res
      .status(500)
      .json({ error: "Error interno al enviar el mensaje" });
  }
}
