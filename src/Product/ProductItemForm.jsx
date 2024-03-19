
const ProductItemForm = () =>{
    return(
        <>
            <label htmlFor="price">1500,00€</label>
            <div className="container_price">
                <input type="text" name="price" id="price" placeholder=""/>
                <button type="submit" name="add">Add</button>
            </div>
        </>
    );}
export default ProductItemForm;