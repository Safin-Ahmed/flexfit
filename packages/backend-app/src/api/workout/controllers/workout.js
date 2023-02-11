'use strict';

/**
 * workout controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::workout.workout');
