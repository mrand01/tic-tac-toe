import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Tic-Tac-Toe' })],
  resolve: {
    extensions: ['.js', '.ts'],
  },
};

export default config;
