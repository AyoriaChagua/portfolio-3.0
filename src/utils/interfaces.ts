interface Experience {
    readonly title: string
    readonly company: string
    readonly location: string
    readonly dates: string
    readonly image: string
    readonly tasks: string[]
}

interface Skill {
    readonly icon: iconSkill
    readonly name: string
    readonly color: string
}

interface Project {
    readonly title: string
    readonly description: string
    readonly image: string
    readonly link?: string
    readonly dates: string
}