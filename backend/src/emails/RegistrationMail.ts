import dontenv from "dotenv";
import transport from "../config/transport";
import MAIL_JOBS from "../constants/MAIL_JOBS";
dontenv.config();

const email = process.env.EMAIL;

export default {
  key: MAIL_JOBS.REGISTRATION_MAIL,
  options: {},
  async handle({ data }: any) {
    const { user } = data;

    await transport.sendMail({
      text: "Test",
      subject: "Sending Email",
      from: `Karleon Cristophe < ${email} >`,
      to: user.email,
      html: `<h3>Hello World!</h3>`,
    });
  },
};
