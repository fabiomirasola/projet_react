import { useState, useEffect } from 'react';
import ProductItemForm from './ProductItemForm.jsx';
import {RequestProduct} from "../Model/Model.js";

const ProductItem = () => {
    const [product, setProduct] = useState('');


    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        RequestProduct.getProduct().then((response) =>{
            setProduct(response);
            })
    }

    return (
        <div className="image">
            {product.mainImage && <img src={product.mainImage} alt="test" />}
            {product.name}
            <ProductItemForm />
        </div>
    );
};

export default ProductItem;
