/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //if there is any problem with the build, try to comment modularizeImports and experimental
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    '@material-ui/core/': {
      transform: '@material-ui/core/{{member}}'
    },
    '@material-ui/lab/': {
      transform: '@material-ui/lab/{{member}}'
    },
    '@material-ui/icons/?(((\\w*)?/?)*)': {
      transform: '@material-ui/icons/{{ matches.[1] }}/{{member}}'
    }
  },
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig
