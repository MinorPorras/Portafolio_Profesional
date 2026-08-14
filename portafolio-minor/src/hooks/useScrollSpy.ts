import { useEffect, useState } from "react";


export function useScrollSpy(ids: string[]){
    const [activeId, setActiveId] = useState(ids[0] ?? "");

    useEffect(() => {
        const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            }
        }, {rootMargin:"-50% 0px -50% 0px", threshold: 0});

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect();
    }, [ids]);

    return activeId;
}