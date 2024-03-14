import { useEffect, useState } from "react"

//getBoundingClientRect devuelve la posición relativa del elemento en la pantalla gráfica, y tambien informacion del tamaño del elemento
export const useScroll = () => {
    const [showNavItem, setShowNavItem] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
                const rect = experienceSection.getBoundingClientRect();
                if (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    setShowNavItem(true);
                } else {
                    setShowNavItem(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return {
        showNavItem,
        scrollToSection
    }
}