const path = require('path'); // pathモジュールを読み込む
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 追記

module.exports = {
    mode: 'development',
    entry: './src/js/index.js', // エントリーポイントを設定
    output: {
        path: path.resolve(__dirname, './dist'), // 絶対パスを取得
        filename: './src/js/index.js', // ビルドされるファイルの名前を設定
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: ['web', 'es5'],
    devServer: {
        port: 8080,
        static: 'dist',
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/, // 変更
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader', // 追加
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new HtmlWebpackPlugin({
            title: 'hello world',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
};
