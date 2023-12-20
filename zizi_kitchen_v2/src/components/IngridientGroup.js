export function IngridientGroup (props) {
    const name = props.name
    const ingridients = props.ingridients


    return (
        <div style={{marginBottom:50}}>

            <p>  {name}: </p>
            { ingridients.map((item, index) => {
            return <div><input type="checkbox" key={index}/>  {item}</div> }) }
          </div>
    )
}