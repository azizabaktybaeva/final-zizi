export function VideoIframe (props){
    const width = props.width
    const height = props.height
    const src = props.src

    return (

        <iframe className="video" width={width} height={height} src={src} allow="accelerometer; autoplay" > </iframe>

    )
}