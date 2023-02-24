'use strict';

/**
 * weekend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekend.weekend');
