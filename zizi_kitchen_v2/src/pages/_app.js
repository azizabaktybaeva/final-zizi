import '@/styles/deserts.css'
import '@/styles/reseptionsStyle.css'
import '@/styles/style.css'
import '@/styles/video.css'
import '@/styles/search.css'
import '@/styles/favorites.css'



import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/400.css"; // Specify weight
import "@fontsource/mulish/400-italic.css"; // Specify weight and style

import {HeaderCustom} from "@/components/HeaderCustom";
import {FooterCustom} from "@/components/FooterCustom";
export default function App({ Component, pageProps }) {
    return (
        <>
            <HeaderCustom/>
            <Component {...pageProps} />
            <FooterCustom/>
        </>
    )
        }




