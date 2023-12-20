import Link from "next/link";

export function FooterCustom () {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer_line">
                        <div className="footLogo"> <b> ZIZI`s </b> </div>
                        <div className="footerItems">
                            <Link className="foot-icons" href="https://www.instagram.com/lilshht/" target="_blank"> <i className='bx bxl-instagram-alt'  ></i> </Link>
                            <Link className="foot-icons" href="https://www.tiktok.com/@lilshht?lang=ru-RU" target="_blank"> <i className='bx bxl-tiktok' ></i> </Link>
                            <Link className="foot-icons" href="https://www.youtube.com/@Cooking_tree" target="_blank"> <i className='bx bxl-youtube'></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}