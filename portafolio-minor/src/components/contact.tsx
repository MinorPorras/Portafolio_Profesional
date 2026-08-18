import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { FormData } from "../types";
import { Icon } from "./common/Icon";
import { useInView } from "../hooks/useInView";
import { track } from "../lib/analytics"

const CONTACT_EMAIL = "minorp1415@protonmail.com";

export function Contact() {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  const startTimeRef = useRef<number>(0);
  const copyTimeoutRef = useRef<number | undefined>(undefined);

  const [copied, setIsCopied] = useState(false);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => () => window.clearTimeout(copyTimeoutRef.current), []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      track("email_copied");
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      //Fallback para contextos donde no se tengan permisos o haya problemascon iframes
      const textarea = document.createElement("textarea");
      textarea.value = CONTACT_EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setIsCopied(true);
    window.clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = window.setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          startTime: startTimeRef.current,
        }),
      });

      if (res.ok) {
        track("contact_form_submitted", {language});
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
        // Reiniciamos la marca de tiempo por si se envía otro mensaje
        startTimeRef.current = Date.now();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Error al enviar el mensaje.");
      }
    } catch (err) {
      console.error("Error al enviar:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`contact-section glassBackground reveal ${inView ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <div className="contact-header">
        <h2 className="section-title">
          {language === "es" ? "Contacto" : "Contact"}
        </h2>
        <p className="contact-subtitle">
          {language === "es"
            ? "¿Tienes algún proyecto, propuesta o consulta? ¡Escríbeme!"
            : "Have a project, proposal, or question? Feel free to reach out!"}
        </p>
        <div className="contact-email-row" aria-live="polite">
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">
            {CONTACT_EMAIL}
          </a>
          <button type="button" className="copy-email-btn" onClick={copyEmail}>
            {copied
              ? language === "es"
                ? "✓ ¡Copiado!"
                : "✓ Copied!"
              : language === "es"
                ? "Copiar"
                : "Copy"}
          </button>
        </div>
        <Icon
          name="mail"
          className="contact-section-icon icon-primary"
          size={24}
        />
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div
          style={{
            display: "none",
            opacity: 0,
            position: "absolute",
            left: "-9999px",
          }}
          aria-hidden="true"
        >
          <label htmlFor="honeypot">No llenar este campo</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">
            {language === "es" ? "Nombre:" : "Name:"}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "es" ? "Tu nombre" : "Your name"}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            {language === "es" ? "Correo:" : "Email:"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo"
            required
            className="form-input"
          />
        </div>
        <div
          className="form-group full-row-input-group"
          style={{ animationDelay: `80ms` }}
        >
          <label htmlFor="subject">
            {language === "es" ? "Asunto:" : "Subject:"}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={
              language === "es" ? "Asunto del mensaje" : "Message subject"
            }
            required
            className="form-input"
          />
        </div>
        <div
          className="form-group full-row-input-group"
          style={{ animationDelay: `160ms` }}
        >
          <label htmlFor="message">
            {language === "es" ? "Mensaje:" : "Message:"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder={
              language === "es"
                ? "Escribe tu mensaje aquí"
                : "Write your message here"
            }
            required
            className="form-input form-textarea"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-submit-btn full-row-input-group"
          style={{ animationDelay: `240ms` }}
        >
          {isSubmitting
            ? language === "es"
              ? "Enviando..."
              : "Sending..."
            : language === "es"
              ? "Enviar mensaje"
              : "Send message"}
        </button>

        {submitted && (
          <p className="contact-success-msg" role="status">
            {language === "es"
              ? "¡Mensaje enviado con éxito! Te responderé pronto."
              : "Message sent successfully! I will reply soon."}
          </p>
        )}
      </form>
    </section>
  );
}
