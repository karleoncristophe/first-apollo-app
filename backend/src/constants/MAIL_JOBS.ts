require("dotenv").config();

export default {
  REGISTRATION_MAIL: `REGISTRATION_MAIL_${process.env.ENV}`,
  FORGOT_PASSWORD: `FORGOT_PASSWORD_${process.env.ENV}`,
};
