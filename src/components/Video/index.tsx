
interface Props {
    readonly link: string;
    readonly autoPlay: boolean;
    readonly onClick: () => void;
}

export default function Video({ link, autoPlay, onClick }: Props) {
    return (
        <video width={"100%"} height={"100%"} controls={false} autoPlay={autoPlay} style={{ borderRadius: 10 }} onClick={onClick}>
            <source src={link} type="video/mp4" />
        </video>
    )
}
