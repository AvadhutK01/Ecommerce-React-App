import React from 'react';
import DisplayProductPage from '../Products/DisplayProductPage';
import productsArr from '../../data/products';

const ProductsPage = () => {
    return (
        <>
            <DisplayProductPage productsArr={productsArr} />
        </>
    );
};

export default ProductsPage;
