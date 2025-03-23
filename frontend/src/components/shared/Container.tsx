export interface ContainerProps{
    children: React.ReactNode
    className?: string
}
export default function Container(props: ContainerProps) {
    return <div className={ `max-w-7xl mx-auto px-4 bg-black ${props.className}`}>{props.children}</div>
}