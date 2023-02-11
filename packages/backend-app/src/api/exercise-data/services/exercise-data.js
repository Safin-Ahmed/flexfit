'use strict';

/**
 * exercise-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-data.exercise-data');
