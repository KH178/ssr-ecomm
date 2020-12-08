import React from 'react';
import Link from 'next/link';
import Categories from '../components/Categories'
import styles from '../styles/Category.module.css';



function Category({ data: { name, image, id }, queryStore }) {

    return (
        <Link href={{ pathname: `/store/${queryStore}/0/category/${id}` }} >
            <a>
                <div className={styles.singleCategory}>
                    <div className={styles.singleCategoryImg}>
                        <img src={image.length ? image : null} onError={(e) => { e.target.onerror = null; e.target.src = "http://via.placeholder.com/50x50" }} />
                    </div>
                    <div className={styles.singleCategoryName}>{name}</div>
                </div>
            </a>
        </Link>

    )
}


export default Category;
