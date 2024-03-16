import { useEffect, useState } from "react";

export const useScroll = () => {
    const [isInAboutSection, setIsInAboutSection] = useState(true);

    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                setIsInAboutSection(true);
            } else {
                setIsInAboutSection(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return {
        isInAboutSection,
        scrollToSection
    };
};
