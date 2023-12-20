import Head from "next/head";
import dishes from './receptions/deserts'
import {RecipeBlock} from "@/components/RecipeBlock";


export default function favorites (props) {
    return(
        <>
            <Head>
                <title>zizi's favorites</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <div className="favIntro">
                    <h2 className="favQuote"> Здесь будут рецептики которые вам понравились!  </h2>
                </div>

            </>
        </>
    )
}