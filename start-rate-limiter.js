/* global require */
var config = require('./lib/rate-limiter/settings').init(),
    rateLimiter = require('./lib/rate-limiter');

rateLimiter.createRateLimiter(config);
