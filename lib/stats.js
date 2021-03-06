// Generated by CoffeeScript 1.3.3
(function() {
  var Stats, StatsD, os;

  StatsD = require('node-statsd').StatsD;

  os = require('os');

  Stats = (function() {

    function Stats(host, port, prefix) {
      this.host = host;
      this.port = port;
      this.prefix = prefix;
      this.stats = new StatsD(this.host, this.port);
      this.hostname = os.hostname();
    }

    Stats.prototype.inc = function(m, s) {
      return this.stats.increment(this.pref(m), s);
    };

    Stats.prototype.dec = function(m, s) {
      return this.stats.decrement(this.pref(m), s);
    };

    Stats.prototype.gauge = function(m, v, s) {
      return this.stats.gauge(this.pref(m), v, s);
    };

    Stats.prototype.count = function(m, v, s) {
      return this.stats.update_stats(this.pref(m), v, s);
    };

    Stats.prototype.timing = function(m, v, s) {
      return this.stats.timing(this.pref(m), v, s);
    };

    Stats.prototype.pref = function(m) {
      return "" + this.prefix + "." + m + "." + this.hostname;
    };

    return Stats;

  })();

  module.exports = Stats;

}).call(this);
