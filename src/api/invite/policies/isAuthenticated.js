"use strict";

/**
 * `isAuthenticated` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info("In isAuthenticated policy.");

  console.log(policyContext);
  console.log(config);
  console.log(strapi);

  const canDoSomething = true;

  if (canDoSomething) {
    return true;
  }

  return false;
};
