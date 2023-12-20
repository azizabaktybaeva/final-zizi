import Head from 'next/head'
import {VideoIframe} from "@/components/VideoIframe";

export default function Home() {
  return (
    <>
      <Head>
          <title>zizi's</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <>
            <div className="mainAbout">
                <div className="aboutHeader">
                    <h1 className="aboutTitle"> Food is happiness </h1>
                    <h1 className="aboutQuote">The easiest way to get people to like you is to feed them. - Rachel Ray
                    </h1>
                </div>
            </div>


            <div className="containerY">
                <div className="welcome">
                    <h1 className="welcomeText">  Откройте для себя новые рецепты, секреты приготовления и вдохновение для кулинарных экспериментов!</h1>
                    <h2 className="welcomeText2"> Присоединяйтесь к нам и давайте вместе готовить что-то вкусное! </h2>
                </div>

                <div className="youtubeTitle"> <h2> Видео, которые могут быть вам интересны: </h2> </div>
                <div className="videos">
                    <VideoIframe width={390} height={240} src={"https://www.youtube.com/embed/Y5lWVW7BL0Q?si=tArR5qtzTo8ZjI6z"} />
                    <VideoIframe width={390} height={240} src={"https://www.youtube.com/embed/-G5aIVNYHPQ?si=yQWMnWA6w_Tk0ilo"} />
                    <VideoIframe width={390} height={240} src={"https://www.youtube.com/embed/iyCSfrW6J_A?si=qml99RIxtW3DKnp2"} />
                </div>
            </div>
        </>

      </>
    )
}

