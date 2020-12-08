module.exports = {

    async redirects() {
        return [
            {
                source: '/',
                destination: '/store/cake-shop/0/main',
                permanent: false,
            },
        ]
    },
}