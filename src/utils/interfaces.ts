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
    readonly title: string
    readonly description: string
    readonly image: string
    readonly link?: string
    readonly dates: string
    readonly tags: tag[]
    readonly skills: skill[]
}