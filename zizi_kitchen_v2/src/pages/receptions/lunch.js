import Head from "next/head";
import {ReseptionsNav} from "@/components/ReseptionsNav";
import {RecipeBlock} from "@/components/RecipeBlock";

const dishes = [
    {
        name: "Яичные маффины на завтрак",
        videoSrc: "https://www.youtube.com/embed/C0fNqINryVI?si=SVFX-A1svmNApyEb",
        ingridientGroups: [
            {
                name: "Ингредиенты для томатной пасты",
                ingridients: [
                    "100г ветчины;",
                    "80г сыра моцарелла;",
                    "80г лука;",
                    "50г моркови;",
                    "20г зеленого лука;",
                    "3 столовые ложки молока;",
                    "Растительное масло;",
                    "Соль",
                    "Перец",
                    "Чеснок",
                ]
            },
        ]},
    {
        name: "Сырно-чесночный хлеб",
        videoSrc: "https://www.youtube.com/embed/LddaIyhLdIM?si=nBhrU0exg3PO-w9U",
        ingridientGroups: [
            {
                name: "Ингредиенты для сырно-чесночного хлеба",
                ingridients: [
                    "200г пшеничной муки",
                    "4г соли;",
                    "20г сахара;",
                    "3г сухих дрожжей;",
                    "10г яиц;",
                    "60г молока;",
                    "60г воды;",
                    "15г сливочного масла;",

                ]
            },
            {
                name: "Ингредиенты для чесночного соуса",
                ingridients: [
                    "20г сливочного масла;",
                    "1 ст л измельченного чеснока;",
                    "1 столовая ложка сгущенного молока с сахаром;",
                    "1 ст л сахара;",
                    "1/2 чайной ложки соли;",
                    "1 чайная ложка сушеной петрушки;",

                ]
            }
        ]
    },
    {
        name: "Сырные корндоги",
        videoSrc: "https://www.youtube.com/embed/-p7YMtvYvSM?si=GmQRorGE3i5c5hpn",
        ingridientGroups: [
            {
                name: "Ингредиенты для теста",
                ingridients: [
                    "150г муки;",
                    "50г рисовой муки;",
                    "30г сахара",
                    "4г соли",
                    "4г сухих быстрорастворимых дрожжей",
                    "1 (50 г) яйцо",
                    "100 мл теплой воды",
                    "3 сосиски;",
                    "Сыр моцарелла",
                    "5 деревянных шпажек",
                ]
            },
            {
                name: "Ингредиенты для начинки",
                ingridients: [
                    "Сахар;",
                    "Кетчуп;",
                    "Горчица;",
                    "1 картофель (145 г);",
                    "1 столовая ложка кукурузного крахмала;",
                ]
            }
        ]
    },

    {
        name: "Кесадилья с картофелем и сыром",
        videoSrc: "https://www.youtube.com/embed/mUA5m-113HQ?si=z7G_v90_Y0mjvPZ7",
        ingridientGroups: [
            {
                name: "Ингредиенты",
                ingridients: [
                    "2 картофелины;",
                    "50г (1/2 стакана) сыра пармезан;",
                    "1/2 чайной ложки черного перца;",
                    "1 лук-шалот;",
                    "1/2 ст л сливочного масла;",
                    "4 ломтика ветчины из индейки;",
                    "6 лепешек;",
                    "Томатный соус;",
                    "Оливковое масло;",
                    "Сыр моцарелла;",

                ]
            },
        ]
    },
    {
        name: "Клаб-сэндвич ",
        videoSrc: "https://www.youtube.com/embed/lG6UdeKjmcQ?si=ftKlDBnP6QCGuwbm",
        ingridientGroups: [
            {
                name: "Ингредиенты для сэндвича",
                ingridients: [
                    "Сыр чеддер;",
                    "Хлеб (Зависит от кол-ва человек);",
                    "1 яйцо",
                    "Сливочное масло;",
                    "Огуречный рассол;",
                    "2 кусочка ветчины;",
                    "Томат;",
                    "Листья салата;",

                ]
            },
            {
                name: "Ингредиенты для соуса",
                ingridients: [
                    "Зерна горчицы 1,5 ложки;",
                    "Майонез 1 ложка;",
                    "Кетчуп 1/2 ложки",
                ]
            }
        ]
    },
]

export default function ReceptionsLunch (){
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

                    <div className="desertiki">
                        <h2> - ланчи - </h2>
                    </div>

                    <div className="listOfDeserts">
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