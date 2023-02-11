'use strict';

/**
 * reminder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reminder.reminder');
