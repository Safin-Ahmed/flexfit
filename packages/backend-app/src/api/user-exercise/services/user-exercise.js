'use strict';

/**
 * user-exercise service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-exercise.user-exercise');
