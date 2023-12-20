import Head from "next/head";

export default function searchPage() {
    return (
        <>
            <Head>
                <title>zizi's videos</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="buttonSearch">
                <div className="search-container">
                    <input type="text" id="searchInput" placeholder="Поиск..." />
                    <button className="searchButton" id="searchButton">
                        Искать
                    </button>
                </div>
            </div>
        </>
    );
}
