module.exports = {
    baseUrl: './',
    filenameHashing: false,
    productionSourceMap: false,
    css: {
        extract: false
    },
    pages: {
        index: {
            entry: 'demo/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
}