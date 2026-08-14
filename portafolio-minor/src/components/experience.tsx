import { useLanguage } from "../hooks/useLanguage";
import { experienceData } from "../data/workExperiences";
import { useInView } from "../hooks/useInView";
import { TimelineItem } from "./timelineItem";

export function Experience() {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      className={`experience-section ${inView ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <h2 className="section-title experience-title">
        {experienceData.title[language]}
      </h2>
      <div className="timeline-container">
        {experienceData.items.map((data, index) => (
          <TimelineItem data={data} index={index} key={data.id}/>
        ))}
      </div>
    </section>
  );
}
