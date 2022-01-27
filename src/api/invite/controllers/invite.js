"use strict";

/**
 * A set of functions called "actions" for `invite`
 */

module.exports = {
  sendInvitation: async (ctx) => {
    try {
      const { data } = ctx.request.body;

      const reqOrigin = ctx.header.host;
      data.reqOrigin = reqOrigin;

      const mail = await strapi.service("api::invite.invite").sendEmail(data);

      if (!mail) {
        ctx.send(
          {
            message: "Mail sending failed",
          },
          500
        );
        return;
      }

      ctx.send({
        message: "Mail sending success",
      });
    } catch (err) {
      ctx.send(
        {
          message: "Mail sending failed",
        },
        500
      );
    }
  },
};
