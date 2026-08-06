import type { LocalizedString, SocialMediaLink } from "./common";

export interface HomeProps {
  greeting: LocalizedString;
  role: LocalizedString;
  tagline: LocalizedString;
  redes: SocialMediaLink[];
  ctaButtons: {
    primary: LocalizedString;
    secondary: LocalizedString;
    contact: LocalizedString;
  };
}