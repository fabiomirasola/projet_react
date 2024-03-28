
const ProductItemForm = ({props}) =>{
    return(
        <div className="Prix">
            {props.price} €
            <div className="container_price">
                <input type="text" name="price" id="price" placeholder=""/>
                <button type="submit" name="add">Add</button>
            </div>
        </div>
    );}


export default ProductItemForm;