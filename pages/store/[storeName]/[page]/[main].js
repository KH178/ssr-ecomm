import React, { useState, useEffect, useContext } from 'react';

import axios from '../../../../helpers/axios';
import { useRouter } from 'next/router';

// Local components
import Categories from '../../../../components/Categories';
import Products from '../../../../components/Products';
import Pagination from '../../../../components/Pagination';

import {
    Context as CategoryContext, Provider as CategoryProvider
} from "../../../../context/CategoriesContext";


function WithProviderStore({ categoryData, productData }) {
    return (
        <CategoryProvider value={categoryData}>
            <Store categoryData={categoryData} productData={productData} />
        </CategoryProvider>
    )
}

function Store({ categoryData, productData }) {
    const router = useRouter();
    const { storeName, page } = router.query;
    const { state: { data }, handleWriteIn } = useContext(CategoryContext);
    console.log(storeName);
    useEffect(() => {
        console.log(categoryData.category);
        handleWriteIn({ data: categoryData.category, key: "category" })
    }, [])
    return (
        <>
            <div style={{ display: 'flex' }}>
                <>
                    <Categories data={categoryData.category} store={storeName} />
                </>
                <>
                    <Products productData={productData} default={true} />
                    <Pagination total={productData.num_pages} store={storeName} current={page} />
                </>
            </div>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps({ query }) {
    const { storeName } = query;
    // Fetch data from external API
    const res = await axios().get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/online-store/category/product/?store_prefix=${storeName}&page=1&category_id=${0}`)
    const resCategory = await axios().get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/online-store/category/?store_prefix=${storeName}`)
    const productData = res.data;
    const categoryData = resCategory.data;
    // Pass data to the page via props
    return { props: { productData, categoryData } }
}

export default WithProviderStore;
