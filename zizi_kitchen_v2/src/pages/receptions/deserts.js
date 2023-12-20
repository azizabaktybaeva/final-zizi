import Head from "next/head";
import {RecipeBlock} from "@/components/RecipeBlock";
import {ReseptionsNav} from "@/components/ReseptionsNav";

const dishes = [
    {
        name: "Японские, пышные блинчики с начинкой из заварного крема",
        videoSrc: "https://www.youtube.com/embed/LF5sZWv7bpg?si=QxVoDQp9LxF-35ub",
        ingridientGroups: [
            {
                name: "Ингредиенты для дораяки",
                ingridients: [
                    "100г муки для торта",
                    "60г сахара;",
                    "20г меда;",
                    "30г молока;",
                    "2 яйца;",
                    "1г разрыхлителя;",

                ]
            },
            {
                name: "Ингредиенты для заварного крема",
                ingridients: [
                    "100г муки для торта",
                    "60г сахара;",
                    "15г муки;",
                    "200г молока;",
                    "1г ванильного экстракта;",
                ]
            }
        ]},
    {
        name: "Печенье S`mores: печенье с зефиром",
        videoSrc: "https://www.youtube.com/embed/DWxeyrLmo18?si=tFFH1TFi5REkxUOg",
        ingridientGroups: [
            {
                name: "Ингредиенты для печенья S'more",
                ingridients: [
                    "160г муки;",
                    "100г сливочного масла;",
                    "90г сахара;",
                    "40г яиц;",
                    "60г жареных грецких орехов;",
                    "2г разрыхлителя;",
                    "1г пищевой соды;",
                    "1г соли;",
                    "2г ванильного экстракта;",
                    "также можно добавить шоколад и орео",


                ]
            },

        ]
    },

    {
        name: "Булочки синнабоны",
        videoSrc: "https://www.youtube.com/embed/NRn5xkk0up0?si=zun9jM6fSWy6Z1nR",
        ingridientGroups: [
            {
                name: "Ингредиенты для булочек",
                ingridients: [
                    "130г теплого молока;",
                    "4г сухих дрожжей;",
                    "300г хлебопекарной муки;",
                    "20г сахара;",
                    "5г соли;",
                    "1 яйцо;",
                    "45г растопленного несоленого сливочного масла;",
                    "50 г несоленого сливочного масла;",
                    "70 г коричневого сахара;",
                    "4 г порошка корицы;",
                ]
            },
            {
                name: "Ингредиенты для глазури",
                ingridients: [
                    "100г сливочного сыра;",
                    "20г сахарной пудры;",
                    "3г ванильного экстракта;",
                    "5г лимонного сока;",
                    "20 г молока;",
                ]
            }
        ]
    },

    {
        name: "Пончики с клубничным кремом",
        videoSrc: "https://www.youtube.com/embed/N3eNXA6CO7I?si=b1d88Jl5jnRxRplr",
        ingridientGroups: [
            {
                name: "Ингредиенты для теста",
                ingridients: [
                    "300г муки;",
                    "1 яйцо комнатной температуры;",
                    "45г (4,5 ст. л.) сахара;",
                    "5г (1,5 чайной ложки) соли;",
                    "5г сухих дрожжей;",
                    "140 мл теплого молока;",
                    "40г сливочного масла комнатной температуры",
                    "300г густых сливок;",
                    "30г сахара;",
                ]
            },
            {
                name: "Ингредиенты для начинки",
                ingridients: [
                    "Клубника;",
                    "Клубничный сироп (по желанию);",
                    "Сахарная пудра;",
                    "Шоколад;",
                    "Какао;",
                    "Шоколадная стружка;",
                ]
            }
        ]
    },
    {
        name: "Шоколадный брауни ",
        videoSrc: "https://www.youtube.com/embed/HFsPi_CvzOU?si=rAP7oCeX_kACEmOp",
        ingridientGroups: [
            {
                name: "Ингредиенты",
                ingridients: [
                    "200г темного шоколада;",
                    "110г (1/2 стакана) несоленого сливочного масла;",
                    "3 яйца;",
                    "150г (3/4 стакана) сахарного песка;",
                    "65г (1/2 стакана) муки;",
                    "25г (1/4 стакана) какао-порошка;",
                    "1 чайная ложка ванильного экстракта;",
                    "1/4 ч л соли;",
                ]
            },
        ]
    },
]
export default function ReceptionsDeserts (){
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

                    <ReseptionsNav />

                    <div className="desertiki">
                        <h2> - десертики - </h2>
                    </div>

                    <div class="listOfDeserts">
                        {
                            dishes.map((item, key)=>{
                                return <RecipeBlock name={item.name} ingridientGroups={item.ingridientGroups} videoSrc={item.videoSrc} key={key}/>
                            })
                        }
                    </div>

                </div>

            </>
        </>
    )
}