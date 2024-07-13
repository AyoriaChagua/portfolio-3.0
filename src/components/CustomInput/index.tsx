interface Props {
    readonly value: string
    readonly onChange: (value: string) => void,
    readonly id: string
}

export default function CustomInput({ value, onChange, id }: Props) {
    return (
        <input
            type="text"
            id={id}
            value={value}
            placeholder={`Your ${id}`}
            onChange={(e) => onChange(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-indigo-950 dark:border-indigo-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    )
}
