import React from 'react'
import Link from 'next/link';
export default function Pagination({ total, current, store, id }) {
    const handlePageJsx = () => {
        let numTo = total;
        const jsx = [];
        while (numTo > 0) {
            jsx.push(
                <Link href={{
                    pathname: `/store/${store}/${Number(numTo)}${id ? `/category/${0}` : '/main'}`
                }} >
                    <a>
                        <span style={{ padding: '1rem', background: '#f2f2f2', display: 'flex', justifyContent: 'center' }}>{numTo}</span>
                    </a>
                </Link>
            );
            numTo--;
        }
        return jsx;
    }
    return (
        <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'row-reverse' }}>
            {handlePageJsx()}
        </div>
    )
}
