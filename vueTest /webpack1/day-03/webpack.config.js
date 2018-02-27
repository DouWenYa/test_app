module.exports = {
    entry:"./index.js",
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[//把loaders替换为rules也可以
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']//把loader替换为use也可以
            }
        ]
    }
}