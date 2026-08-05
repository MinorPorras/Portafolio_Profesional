export type Theme = "light" | "dark";

export type Language = "en" | "es";

export type navbarItem = {
  name: Record<Language, string>;
  href: string;
}