'use strict';

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
const appInsights = require("applicationinsights"); 
appInsights.setup("<instrumentation_key>"); 
appInsights.start();
var server = app.start();
