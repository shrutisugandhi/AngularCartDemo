
module.exports = function(bs) {
  return {

      "port": 8000,
      "files": ["./src/**/*.{html,htm,css,js}"],
      "server": { "baseDir": "dist" }
    ,
    server: {
      middleware: {
        0:null,
        // overrides the second middleware default with new settings
        1: require('connect-history-api-fallback')({
          index: '/index.html',
          verbose: true
        })
      }
    }
  }
};
