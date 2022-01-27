module.exports = {
  routes: [
    {
      method: "POST",
      path: "/invite",
      handler: "invite.sendInvitation",
    },
  ],
};
