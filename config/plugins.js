module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "1d",
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "stefan.bozic+sendgrid@quantox.com",
        defaultReplyTo: "stefan.bozic+sendgrid@quantox.com",
      },
    },
  },
});
