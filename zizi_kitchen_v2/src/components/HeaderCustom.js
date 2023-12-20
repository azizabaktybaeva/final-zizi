import Link from "next/link";
import {useEffect} from "react";

export function HeaderCustom () {

    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header-line">

                        <Link className="header-logo" href="/">  <b> ZIZI`S KITCHEN </b> </Link>

                        <div className="nav">
                            <Link className="nav-link" href="/">главная</Link>
                            <Link className="nav-link" href="/receptions">рецептики</Link>
                            <Link className="nav-link" href="/youtube">видео</Link>
                            <Link className="nav-link" href="/searchPage">поиск</Link>
                        </div>

                        <div className="icons">
                            <Link className="nav-item" href="/searchPage"> <i className='bx bxs-search-alt-2' ></i> </Link>
                            <Link className="nav-item" href="/favorites"> <i className='bx bxs-user'></i> </Link>
                        </div>
                    </div>
                </div>
                <div className="line"> </div>
            </div>
        </header>
    )
}