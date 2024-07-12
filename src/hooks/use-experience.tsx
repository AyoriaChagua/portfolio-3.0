import { useState } from "react"
import { MOCK_EXPERIENCE } from "../utils/mock-data";

export const useExperience = () => {
    const [show, setshow] = useState(false);
    // const [experiences, setExperiences] = useState(MOCK_EXPERIENCE);
    // setExperiences(MOCK_EXPERIENCE)
    const showDescription = () => setshow(show => !show)
    return {
        show,
        showDescription,
        experiences: MOCK_EXPERIENCE
    }
}