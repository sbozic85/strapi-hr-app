module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c3e987f8e164a34473d51e73b2a91ab5'),
  },
});
