import path from 'path'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Read environment
require( 'dotenv' ).load()

const version = require( './units/_configuration/package.js' ).version
const host = process.env.HOST
const port_webpack = process.env.PORT_WEBPACK
const node_env = process.env.NODE_ENV
const sassets_configuration_version = process.env.CFSB_SASSETS_CONFIGURATION_VERSION

const publicPath = sassets_configuration_version
  ? `/sassets/${version}.${sassets_configuration_version}/`
  : node_env === 'production'
    ? `/assets/${version}/`
    : `http://${host}:${port_webpack}/${version}/`

console.log(
  'Webpack ' + JSON.stringify({ node_env, version, sassets_configuration_version, publicPath }),
)

const ifProd = plugin => ( node_env === 'production' ? plugin : undefined )
const ifNotProd = plugin => ( node_env !== 'production' ? plugin : undefined )
const removeEmpty = array => array.filter( p => !!p )

const config = {
  devServer: {
    host,
    port: port_webpack,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  entry: {
    client: [ 'whatwg-fetch', path.resolve( 'units/urb-base-webapp/client.js' ) ],
    vendor: [
      'babel-polyfill',
      'farce',
      'found',
      'found-relay',
      'isomorphic-fetch',
      '@material-ui/core',
      'prop-types',
      'react',
      'react-code-splitting',
      'react-dom',
      'react-event-listener',
      'react-helmet',
      'react-relay',
      'relay-runtime',
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  output: {
    path: path.resolve(
      `deployment/units/_configuration/urb-base-server/public_files/assets/${version}`,
    ),
    filename: '[name].js',
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: removeEmpty([
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [ 'react-native-stage-0' ],
              plugins: removeEmpty([
                'dynamic-import-webpack',
                ifNotProd( 'flow-react-proptypes' ),
                'syntax-dynamic-import',
                [
                  'relay',
                  {
                    schema: 'schema.graphql',
                  },
                ],
              ]),
            },
          },
          ifNotProd({ loader: 'eslint-loader' }),
        ]),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  plugins: removeEmpty([
    new webpack.EnvironmentPlugin(),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify( process.env.NODE_ENV ),
        },
      },
    }),
    ifNotProd( new webpack.NamedModulesPlugin() ),
  ]),
}

if ( node_env !== 'production' ) {
  config.devtool = 'source-map'

  // Introduce relatively large timeout to allow babel-node to restart and avoid
  // getting an entirely blank screen when hot reloading happens and babel-node
  // is in the process of restarting
  config.watch = true
  config.watchOptions = {
    aggregateTimeout: 2000,
    poll: true,
  }
}

export default config
