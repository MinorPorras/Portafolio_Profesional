import { useEffect, useRef } from "react";
import type { ImageModalProps } from "../../types";
import { createPortal } from "react-dom";

export function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  altText,
}: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    //Cierra el modal al presionar esc
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    //Bloquear el scroll del fondo
    const previusOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    //Mover el foco al botón de cerrar
    closeButtonRef.current?.focus();

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previusOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="image-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={altText}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="image-modal-content">
        <button
          ref={closeButtonRef}
          type="button"
          className="image-modal-close"
          onClick={onClose}
          aria-label="Cerrar imagen ampliada"
        >
          X
        </button>
        <img src={imageUrl} alt={altText}  className="image-modal-img"/>
      </div>
    </div>,
    document.body,
  );
}
