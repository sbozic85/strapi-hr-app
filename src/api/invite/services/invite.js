"use strict";

const sendGridMail = require("@sendgrid/mail");

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

function getMessage(email, slug, reqOrigin) {
  return {
    to: email,
    from: "stefan.bozic@quantox.com",
    subject: "You've been invited to join HR app",
    html: `<p>Click <a href="http://${reqOrigin}/join/${slug}">here</a> to join HR app</p>`,
  };
}

/**
 * invite service.
 */

module.exports = {
  sendEmail: async (data) => {
    const { email, companySlug, reqOrigin } = data;

    const newMail = await sendGridMail.send(
      getMessage(email, companySlug, reqOrigin)
    );

    const mailStatusCode = newMail[0].statusCode.toString();

    const firstCharacter = mailStatusCode.charAt(0);

    if (firstCharacter !== "2") {
      return false;
    }

    return true;
  },
};
