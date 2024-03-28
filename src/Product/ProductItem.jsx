import { useState, useEffect } from 'react';
import ProductItemForm from './ProductItemForm.jsx';
import { RequestProduct } from "../Model/Model.js";

const ProductItem = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        RequestProduct.getAllProducts().then((response) =>{
            setProductList(response);
        });
    }
    return (
        <>
            {productList.map((product)=>(
                <div className="image" key={product._id}>
                    {product.mainImage && <img src={product.mainImage} alt="test"/>}
                    {product.description}
                    <ProductItemForm props={product}/>
                </div>
            ))}
        </>
    );
};

export default ProductItem;
