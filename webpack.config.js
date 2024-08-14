// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), // 어떠한 경로에다가 결과물을 만들어서 내어줄 것인지를 명시, node.js에서 요구하는 절대 경로를 필요로 한다.
    // filename: 'main.js', // 그 결과를 main.js, entry에서 읽어들이기 시작하는 그 파일의 이름과 동일하게 지정을 해줄 수 있다.
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플로그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
};
