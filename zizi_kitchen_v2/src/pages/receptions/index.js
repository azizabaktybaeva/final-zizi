import Head from "next/head";
import {ReseptionsNav} from "@/components/ReseptionsNav";

export default function Receptions  (){
    return (

        <>
            <Head>
                <title>zizi's recipes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <>
            <div className="quotetwo">
                <h1 className="QuoteReseptions"> Самые важные вещи в жизни - очень простые: только вкусная еда, хороший сон и любовь </h1>
            </div>
            <div className="line"> </div>

            <div className="container">

                <ReseptionsNav/>

                <div className="adBook">
                    <div className="advertisement"> <img src="/pictures/book.jpg" /> </div>
                    <div className="adText"> <h1> Успейте сделать предзаказ !</h1> <br/>
                        <h2> Только сегодня! При заказе одной книги вы автоматически учавствуете в конкурсе, призом в котором является - подпись самого автора!</h2>
                        <h2> Поторопитесь ! </h2>
                        <button type="button" style={{font: "40px Mulish"}}>ЗАКАЗАТЬ КНИГУ</button>
                    </div>

                </div>
            </div>

        </>
        </>
    )
}