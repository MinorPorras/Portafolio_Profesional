import type { IconName, LocalizedString } from "./common";

export interface QuickFact {
  iconName: IconName; 
  value: LocalizedString;
}

export interface AboutData {
  title: LocalizedString;
  paragraphs: LocalizedString[];
  quickFacts: QuickFact[];
}

// Si vas a pasar este objeto como prop a un componente <AboutMe />:
export interface AboutProps {
  data: AboutData;
}