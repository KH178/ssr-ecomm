
import React, { useState, useEffect, useContext } from 'react';
import axios from '../../../../../helpers/axios';
import { useRouter } from 'next/router';

// Local components
import Categories from '../../../../../components/Categories';
import Products from '../../../../../components/Products';
import Pagination from '../../../../../components/Pagination';

// import {
//     Context as CategoryContext, Provider as CategoryProvider
// } from "../../context/CategoriesContext";



function WithProps({ productData, categoryData }) {
    // const { state: { data }, handleWriteIn } = useContext(CategoryContext);
    const router = useRouter();
    const { storeName, page } = router.query;
    return (
        <div style={{ display: 'flex' }}>
            <>
                <Categories data={categoryData.category} store={storeName} />
            </>
            <>
                <CategoryPage data={productData} />
            </>
        </div>

    )
}


function CategoryPage({ data }) {
    const router = useRouter();
    const [pageCount, setPageCount] = useState(1)
    const { storeName, category, page } = router.query;
    console.log(storeName, category);



    return (
        <>
            <Products productData={data} />
            <Pagination total={data.num_pages} id={category} current={page} />
        </>

    )
}
// This gets called on every request
export async function getServerSideProps({ query }) {
    const { storeName, category } = query;
    // Fetch data from external API
    const res = await axios().get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/online-store/category/product/?store_prefix=${storeName}&page=1&category_id=${category}`)
    const resCategory = await axios().get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/online-store/category/?store_prefix=${storeName}`)
    const { data } = res;
    console.log(data)
    const categoryData = resCategory.data;
    // Pass data to the page via props
    return { props: { productData: data, categoryData } }
}



export default WithProps
