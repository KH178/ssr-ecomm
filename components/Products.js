import React from 'react';
import ProductCard from './ProductCard'
import Pagination from './ProductCard'

function Products({ productData }) {
    return (
        <>
            <div style={{
                flexWrap: 'wrap',
                display: 'flex'
            }}>
                {productData.products.map((data, i) => (
                    <ProductCard data={data} key={i} />

                ))}

            </div>

        </>
    )
}

export default Products
