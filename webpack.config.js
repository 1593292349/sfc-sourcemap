const {VueLoaderPlugin}=require('vue-loader');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	mode:'production',
	devtool:'source-map',
	entry:'./src/main.js',
	module:{
		rules:[
			{
				sideEffects:true,
				test:/\.vue$/,
				loader:'vue-loader',
			},
			{
				test:/\.ts$/,
				use:[
					{
						loader:'ts-loader',
						options:{
							appendTsSuffixTo:[/\.vue$/],
							transpileOnly:true,
							compilerOptions:{
								sourceMap:true,
							},
						}
					},
				],
			},
		]
	},
	resolve:{
		alias:{
			vue$:'vue/dist/vue.runtime.esm-bundler.js',
		}
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin(),
	],
}
