var istanbul = require('istanbul')

var IstanbulInstrumentLoader = function(source) {
  var instrumenter = new istanbul.Instrumenter({
    embedSource: true,
    noAutoWrap: true
  })

  return instrumenter.instrumentSync(source, this.request)
}

module.exports = IstanbulInstrumentLoader
