import React, { useContext } from 'react';
import Category from './Category';
import styles from '../styles/Store.module.css';

// import {
//     Context as CategoryContext,
// } from "../context/CategoriesContext";
function Categories({ store, data }) {
    // const { state: { category: { data } } } = useContext(CategoryContext);
    const isNotEmpty = arr => Array.isArray(arr) && arr.length >= 1;
    return (
        <div style={{ minWidth: '20rem' }}>
            <div className={styles.categoryContainer}>
                {isNotEmpty(data) ? data.map((data, i) => <Category data={data} key={i} queryStore={store} />) : null}
            </div>

        </div>
    )
}

export default Categories
