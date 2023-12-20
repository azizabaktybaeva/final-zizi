import {IngridientGroup} from "@/components/IngridientGroup";

export function RecipeBlock (props){
    const name = props.name
    const videoSrc = props.videoSrc
    const ingridientGroups = props.ingridientGroups

    const onAddToFavorites=props.onAddToFavorites
    const handleAddToFavorites = () => {
        onAddToFavorites(recipe);
    };

    return(

        <div className="columnOne">
            <div className="list__des"> {name} <button onClick={handleAddToFavorites}><i className='bx bx-star'></i></button> </div>
            <div className="reseptOfDes">

                <div className="listofIngridients">


                    { ingridientGroups.map((item, index) => {
                        return <IngridientGroup name={item.name} ingridients={item.ingridients} key={index} /> }) }

                </div>
                <div className="list__vid"> <iframe className="video" width="500" height="350" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay" allowFullScreen> </iframe>
                </div>
            </div>
        </div>
    )
}