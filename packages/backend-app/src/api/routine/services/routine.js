'use strict';

/**
 * routine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::routine.routine');
