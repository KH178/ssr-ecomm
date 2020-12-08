import React from 'react';
import styles from '../styles/Product.module.css';
function ProductCard({ data: { product_name, search_keyword, image_url, unit, price_stock } }) {

    const handlePriceDisplay = () => {

        return price_stock.map((data, i) => (
            <>
                <span key={i}>
                    Quantiy: {data.dataquantity}
                </span>
                <span>
                    Price: {data.selling_price}
                </span>
            </>
        ))
    }
    return (
        <div className={styles.card}>
            {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%" /> */}
            <img src={image_url} />
            <h3>{product_name || ''}</h3>
            <p className="price">$19.99</p>
            <p><span>Units: {unit}</span>&nbsp;{handlePriceDisplay()}</p>
            <p><button>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard
