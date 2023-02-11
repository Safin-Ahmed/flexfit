'use strict';

/**
 * workout-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workout-history.workout-history');
