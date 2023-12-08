const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
module.exports ={
    entry:"./src/index.js",
        // build genrate,
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'),
        clean:true
    },

    plugins:[
        new HtmlWebPackPlugin({
            template:"./public/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    }
                },
                
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader']
            },
            // image support
            {
                test:/\.(png|jpg|gif)$/,
                type:"asset/resource"
            }
        ]
    },
}