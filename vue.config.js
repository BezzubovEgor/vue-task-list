module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL || '/',
    pwa: {
        themeColor: '#FFF',
        msTileColor: '#FFF',
        name: 'Vue todo',
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
                    handler: 'cacheFirst'
                },
                {
                    urlPattern: new RegExp('https://stackpath.bootstrapcdn.com/bootstrap/(.*)'),
                    handler: 'cacheFirst'
                },
                {
                    urlPattern: new RegExp('https://use.fontawesome.com/(.*)'),
                    handler: 'cacheFirst'
                },
            ]
        }
    }
}