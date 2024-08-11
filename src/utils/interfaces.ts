interface Experience {
    readonly title: string
    readonly company: string
    readonly location: string
    readonly dates: string
    readonly image: string
    readonly tasks: string[]
}

interface Skill {
    readonly icon: skill
    readonly name: string
    readonly color: string
}

interface AuxSkill extends Skill {
    readonly isActive: boolean
}

interface Project {
    readonly summary: string
    readonly title: string
    readonly description: string
    readonly image: string
    readonly github?: string
    readonly dates: string
    readonly tags: tag[]
    readonly skills: skill[]
    readonly video_link?: string
    readonly link?: string
}

interface ThemeProps {
    readonly theme: themeMode,
    readonly handleChangeTheme: () => void
}