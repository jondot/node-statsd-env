StatsD = require('node-statsd').StatsD
os = require 'os'

class Stats
  constructor: (@host, @port, @prefix)->
    @stats = new StatsD(@host, @port)
    @hostname = os.hostname()

  inc: (m ,v)->
    @stats.increment @pref(m), v

  pref: (m)->
    "#{@prefix}.#{m}.#{@hostname}"

module.exports = Stats

