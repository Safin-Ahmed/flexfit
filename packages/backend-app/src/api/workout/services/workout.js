'use strict';

/**
 * workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workout.workout');
