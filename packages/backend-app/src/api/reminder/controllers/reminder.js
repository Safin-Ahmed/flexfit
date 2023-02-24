"use strict";

/**
 * reminder controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::reminder.reminder",
  ({ strapi }) => ({
    async find(ctx) {
      // calling the default core action
      const { data, meta } = await super.find(ctx);

      // some more custom logic

      return { data, meta };
    },

    async create(ctx) {
      // calling the default core action
      const { data, meta } = await super.create(ctx);

      // custom logic
      console.log(data);
      console.log("Custom logic inside create");
    },
  })
);
