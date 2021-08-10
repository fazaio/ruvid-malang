module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Ruvid-Malang | Kumpulan informasi tanggap covid-19 kota Malang.";
                return args;
            })
    }
}