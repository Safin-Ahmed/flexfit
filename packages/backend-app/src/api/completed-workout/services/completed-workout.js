'use strict';

/**
 * completed-workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::completed-workout.completed-workout');
