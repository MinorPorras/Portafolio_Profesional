import type { IconProps } from "../../types";
import { iconPaths } from "./iconPaths";

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const iconDefinition = iconPaths[name];

  if (!iconDefinition) {
    console.warn(`Icon "${name}" not found in iconPaths map.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={size}
      height={size}
      viewBox={iconDefinition.viewBox}
      className={className}
    >
      {iconDefinition.content}
    </svg>
  );
}
