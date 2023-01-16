const {VueLoaderPlugin}=require('vue-loader');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const cache={};
module.exports={
	mode:'production',
	devtool:'source-map',
	entry:'./src/main.js',
	output:{
		clean:true,
	},
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
			{
				test:/\.css$/,
				use:(cache.cssLoaders=[
					//生成模式下: 提取css到单独文件
					'vue-style-loader',
					{
						loader:'css-loader',
						options:{
							sourceMap:true,
							importLoaders:2,
						}
					},
					{
						loader:'postcss-loader',
						options:{
							sourceMap:true,
							postcssOptions:{
								plugins:[
									require('autoprefixer'),
								]
							}
						}
					},
				]),
			},
			{
				test:/\.scss$/,
				use:[
					...cache.cssLoaders,
					{
						loader:'sass-loader',
						options:{
							sourceMap:true,
						},
					},
				]
			},
		]
	},
	resolve:{
		alias:{
			vue$:'vue/dist/vue.runtime.esm-bundler.js',
		},
		extensions:[
			'.ts',
			'.js',
			'.vue',
			'.json',
			'.wasm',
		],
		mainFiles:[
			'index',
		],
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin(),
	],
	performance:{
		hints:false,
	},
}
