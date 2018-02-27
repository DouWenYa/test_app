module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        // rules: [
        //     {
        //         test: "/\.(png|jpg)$/",
        //         use: [
        //             {
        //                 loader: "url-loader",
        //                 options: {
        //                     limit: "9600"
        //                 }
        //             }
        //         ]
        //     }
        // ]
        loaders: [
            {
                test: "/\.(png|jpg)$/",
                loader: "url-loader",
                        
            }
        ]
    }
}