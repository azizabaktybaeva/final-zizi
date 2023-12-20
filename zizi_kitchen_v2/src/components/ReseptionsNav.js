import Link from "next/link";

export function ReseptionsNav (){
    return(

        <div className="reseptionsNav">
            <Link className="linkRes" href="/receptions/deserts">десертики</Link>
            <Link className="linkRes" href="/receptions/lunch">перекусы</Link>
            <Link className="linkRes" href="/receptions/hot_dishes">горячие блюда</Link>
            <Link className="linkRes" href="/receptions/fast_food">фастфуд</Link>

        </div>
    )
}