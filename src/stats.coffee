StatsD = require('node-statsd').StatsD
os = require 'os'

class Stats
  constructor: (@host, @port, @prefix)->
    @stats = new StatsD(@host, @port)
    @hostname = os.hostname()

  inc: (m, s)->
    @stats.increment @pref(m), s

  dec: (m, s)->
    @stats.decrement @pref(m), s

  gauge: (m, v, s)->
    @stats.gauge @pref(m), v, s

  count: (m, v, s)->
    @stats.update_stats @pref(m), v, s

  timing: (m, v, s)->
    @stats.timing @pref(m), v, s

  pref: (m)->
    "#{@prefix}.#{m}.#{@hostname}"

module.exports = Stats

