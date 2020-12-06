const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: process.env.VUE_APP_BUILD_ASSETS_PATH,
    publicPath: process.env.VUE_APP_BUILD_PUBLIC_PATH,
    outputDir: process.env.VUE_APP_BUILD_OUTPUT_PATH,

    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,

    // webpack配置
    //对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        // config.plugins.delete('prefetch');
        // config.plugins.delete('preload');
        // config.resolve.symlinks(true);
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 102400}));
        config.resolve.alias
            .set('@assets', resolve('assets'))
            .set('@Pages', resolve('Pages'))

        config.plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
        } else {
            // 为开发环境修改配置...
        }
        return config;
    },

    //调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
    configureWebpack: config => {
        //生产and测试环境
        let pluginsPro = [];
        //开发环境
        let pluginsDev = [];
        // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
        if (process.env.NODE_ENV === 'production') {
            config.plugins = [...config.plugins, ...pluginsPro];
        } else {
            // 为开发环境修改配置...
            config.plugins = [...config.plugins, ...pluginsDev];
        }
    },

    css: {
        extract: true,
    },

    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
    },
};