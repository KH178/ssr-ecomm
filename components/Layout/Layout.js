import React from 'react';
import Categories from '../Categories';


function Layout({ children }) {

    return (
        <div>
            <Categories store={'cake-shop'} />
            <>
                {children}
            </>
        </div>
    )
}


export default Layout
