import Head from 'next/head';
import {VideoIframe} from "@/components/VideoIframe";
import {Blogger} from "@/components/Blogger";

const bloggers = [
    { name: '1. Cooking tree 쿠킹트리', videoSrc: 'https://www.youtube.com/embed/582RCVVHoWs?si=Vlw-ZDaXxN1B1zGz' },
    { name: '2. CL Cooking', videoSrc: 'https://www.youtube.com/embed/FW6ukG2GrFE?si=Pe9aTVZ9Gfsyq32B' },
    { name: '3. 냥숲nyangsoop', videoSrc: 'https://www.youtube.com/embed/NRn5xkk0up0?si=k0xv-IVkUUdJvtKI' },
    { name: '4. nekoniwa', videoSrc: 'https://www.youtube.com/embed/YZ1XJQ8osEU?si=YXaK4kUvOqurMAfS' },
    { name: '5. Lynkam', videoSrc: 'https://www.youtube.com/embed/INDUn1xc7WM?si=zmCBNjIt8EEdZWMP' },
    { name: '6. 요조소리-Calming Cooking', videoSrc: 'https://www.youtube.com/embed/582RCVVHoWs?si=Vlw-ZDaXxN1B1zGz' },
    { name: '7. 꿀주부 Honeyjubu', videoSrc: 'https://www.youtube.com/embed/7aLAeGPqHOY?si=HnlmjhMw5f2bojvZ' },
    { name: '8. HidaMari Cooking', videoSrc: 'https://www.youtube.com/embed/2utgqRCAIr4?si=56pCxjcDJ893owPW' },
    { name: '9. 여니쿡 Yeoni cook', videoSrc: 'https://www.youtube.com/embed/LF5sZWv7bpg?si=scIjoGrZJid9j8VC' },
    { name: '10. 매일맛나 delicious day', videoSrc: 'https://www.youtube.com/embed/tAiY1idKvec?si=CFW7WvbJnshvZ6qw' },
    { name: '11. 집밥요리 Home Cooking', videoSrc: 'https://www.youtube.com/embed/1LO7voa7IJM?si=mM5bmmzvy87VvSp7' },
    { name: '12. table diary 식탁일기', videoSrc: 'https://www.youtube.com/embed/Bj51yJcaq5E?si=OZwSA-ZtI8JGUYJC' },

];
export default function YoutubeVideos (){
    return (
        <>
        <Head>
            <title>zizi's videos</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <>
            <div className="container">
                <div className="helloYT">
                    <div className="performYT"> <h1> Не можете найти каналы на ютубе с хорошими рецептами? </h1> <h1> Не проблема! Мы специально подобрали для вас множество каналов с красивой картинкой, подачей и рецептами, которые вы долго искали!
                    </h1> </div>
                    <img src="/pictures/reseptionsIm.jpg"/>
                </div>
            </div>
            <div className="line"> </div>

            <div className="container">

                <div className="listOfBloggers" style={{marginBottom:120}}>

                    {bloggers.map((blogger, index) => (
                        <Blogger key={index} name={blogger.name} videoSrc={blogger.videoSrc} />
                    ))}
                </div>
            </div>

        </>
      </>
    )
}