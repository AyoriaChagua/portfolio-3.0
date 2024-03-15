import { useState } from "react"

export const useExperienceCard = () => {
    const [show, setshow] = useState(false);
    const showDescription = () => setshow(show => !show)
    return {
        show,
        showDescription
    }
}