import type { IconProps } from "../types";
import { iconPaths } from "./common/iconPaths";

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
}) => {
  const iconDefinition = iconPaths[name];

  if (!iconDefinition) {
    console.warn(`Icon ${name} not found un iconPaths map.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={size}
      height={size}
      viewBox={iconDefinition.viewBox}
      className={`icon icon-${name} ${className}`}
    >
      {iconDefinition.path}
    </svg>
  );
};
