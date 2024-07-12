
interface Props {
    readonly link: string;

    readonly autoPlay: boolean;
}

export default function Video({ link, autoPlay }: Props) {
    return (
        <video width={"100%"} height={"100%"} controls={false} autoPlay={autoPlay} style={{borderRadius: 10}}>
            <source src={link} type="video/mp4" />
        </video>
    )
}
