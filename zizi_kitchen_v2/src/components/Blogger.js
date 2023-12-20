import {VideoIframe} from "@/components/VideoIframe";

    export const Blogger = ({ name, videoSrc }) => {
        return (
            <div className="columnTop">
                <div className="listTop"> <p> {name} </p> </div>
                <div className="list-video">
                    <VideoIframe className="video" width={340} height={200} src={videoSrc}/>
                </div>
            </div>
        );
    };
