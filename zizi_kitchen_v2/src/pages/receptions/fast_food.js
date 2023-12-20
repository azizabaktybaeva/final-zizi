import Head from "next/head";
import {RecipeBlock} from "@/components/RecipeBlock";
import {ReseptionsNav} from "@/components/ReseptionsNav";

const dishes = [
    {
        name: "Луковые кольца с моцареллой",
        videoSrc: "https://www.youtube.com/embed/vVSbsSgVj0E?si=QlvFiNmSjIzGPhah",
        ingridientGroups: [
            {
                name: "Ингредиенты",
                ingridients: [
                    "100г сыра Моцарелла;",
                    "1 луковица;",
                    "50г муки;",
                    "100г панировочных сухарей;",
                    "2 яйца;",
                    "Растительное масло;",
                    "Соль, перец по вкусу;",
                    "Плавленный сыр;",

                ]
            },
        ]
    },
    {
        name: "Хрустящий куриный бургер",
        videoSrc: "https://www.youtube.com/embed/k5ZezBGitVs?si=yIoNGkhK1z41lyvO",
        ingridientGroups: [
            {
                name: "Ингредиенты для куриного маринада",
                ingridients: [
                    "100г, 1 куриная грудка;",
                    "100 мл молока;",
                    "16г (2 ст. Л.) муки;",
                    "2г (1 чайная ложка) порошка чили;",
                    "2г (1 чайная ложка) порошка карри;",
                    "0,4 ч.л. порошка перца;",
                ]
            },
            {
                name: "Ингредиенты для соуса",
                ingridients: [
                    "40г (2 столовые ложки) майонеза;",
                    "15г (1 столовая ложка) медовой горчицы;",
                    "6г (0,5 столовых ложки) меда;",
                    "1г (1 чайная ложка) петрушки;",
                    "20 г молока;",
                ]
            },
            {
                name: "Сборка бургера",
                ingridients: [
                    "Булочки для гамбургеров;",
                    "10г сливочного масла;",
                    "1 сыр чеддер;",
                    "3 ломтика лука;",
                    "1 или 2 ломтика помидоров и салата;",
                ]
            }

        ]
    },

    {
        name: "Тако",
        videoSrc: "https://www.youtube.com/embed/3qzE-HSCXIc?si=RuSdNe2zOZ9UPn5O",
        ingridientGroups: [
            {
                name: "Ингредиенты",
                ingridients: [
                    "200гр говяжий фарш;",
                    "2 мучные лепешки 25 см;",
                    "2 мучные лепешки 15 см;",
                    "Латук;",
                    "Нарезанные помидоры;",
                    "Халапеньо;",
                    "Сметана;",
                    "Моцарелла + Чеддер (натертые);",
                ]
            },
            {
                name: "Ингредиенты для соуса",
                ingridients: [
                    "48г (3 ст. Л.) Томатного соуса для пасты;",
                    "10г (1 столовая ложка) порошка карри;",
                    "18г 1 ст. Л. Измельченного чеснока;",
                    "30г (2 столовые ложки) нарезанного лука;",
                    "1,5г (1 чайная ложка) порошка перца чили;",
                ]
            }
        ]
    },

    {
        name: "Жареная курочка как из KFC",
        videoSrc: "https://www.youtube.com/embed/ld2WdB9qVZI?si=kBovhepqx8sk2H8b",
        ingridientGroups: [
            {
                name: "Ингредиенты для маринада",
                ingridients: [
                    "350г куриной вырезки (около 12 штук);",
                    "1 ст.ложка чесночного порошка;",
                    "Перец и соль;",
                    "1 чайная ложка порошка красного перца;",
                ]
            },
            {
                name: "Ингредиенты для соуса",
                ingridients: [
                    "3 столовые ложки кетчупа;",
                    "Половина столовой ложки пасты из красного перца;",
                    "Половина столовой ложки соевого соуса;",
                    "2 столовые ложки крахмального сиропа;",
                    "1 столовая ложка сахара;",
                    "Половина столовой ложки измельченного чеснока;",
                ]
            }
        ]
    },
    {
        name: "Домашняя пицца ",
        videoSrc: "https://www.youtube.com/embed/jxVOPjOTKoo?si=SKYX49_uz_0uJmDJ",
        ingridientGroups: [
            {
                name: "Ингредиенты для теста",
                ingridients: [
                    "150г Хлебная мука;",
                    "3г соли (1 чайная ложка);",
                    "Растворимые сухие дрожжи 4 г ;",
                    "90г теплой воды;",
                    "10г оливкового масла;",
                ]
            },
            {
                name: "Ингредиенты для начинки",
                ingridients: [
                    "210г сыра Моцарелла;",
                    "Нарезанный лук;",
                    "Зеленый перец;",
                    "Сладкая кукуруза;",
                    "Пепперони;",
                    "Оливки;",
                    "Кетчуп, майонез, томатная паста;",

                ]
            }
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
                        <h2> - фастфуд - </h2>
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