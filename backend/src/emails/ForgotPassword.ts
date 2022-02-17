require("dotenv").config();
import transport from "../config/transport";
import MAIL_JOBS from "../constants/MAIL_JOBS";

const email = process.env.EMAIL;

export default {
  key: MAIL_JOBS.FORGOT_PASSWORD,
  options: {},
  async handle({ data }: any) {
    const { user } = data;

    const code = data;

    await transport.sendMail({
      text: "Redefinição de senha",
      subject: "Redefinição de senha",
      from: `Form Company < ${email} >`,
      to: user.email,
      html: `<center><h3>Redefinição de senha</h3><div><p>Seu código é ${code.code}</p><a href=" http://192.168.0.107:3000/sendCode">Acesse este link para redefinir sua senha</a></div><center>`,
    });
  },
};
