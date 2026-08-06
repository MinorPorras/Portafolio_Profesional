import type { IconProps } from "../types";
import { iconPaths } from "./common/iconPaths";

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
}) => {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`Icon ${name} not found un iconPaths map.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={size}
      height={size}
      viewBox="0 0 24 24" // Asegúrate de que coincida con el viewBox estándar de tus SVGs
      className={`icon icon-${name} ${className}`}
    >
      {path}
    </svg>
  );
};
