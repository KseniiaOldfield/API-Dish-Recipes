import icon from './check.png'
function MyRecipesComponent({label, image, calories, ingredients}) {
    return (<div>
       <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img className="tasty" src={image}/>
        </div>
        <ul className="list">
            {ingredients.map(ingredient => (
                <li className="check"> <img className='icon2' src={icon}/> {ingredient}</li>
            ))}
        </ul>
        <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
    </div>
</div>
    )
}
export default MyRecipesComponent;