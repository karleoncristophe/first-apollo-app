import MAIL_JOBS from "../../../constants/MAIL_JOBS";
import bcrypt from "bcryptjs";
import Queue from "../../../lib/Queue";
import User from "../../../models/User";
import { pubsub } from "../../../server";
import { UserInterface } from "../../interfaces/UserInterface";
import { USER_ADDED } from "../../subscriptions/user/channels";

export default async (_: UserInterface, { input }: UserInterface) => {
  const { name, email, password } = input;
  if (await User.findOne({ email })) {
    console.log("email já cadastrado");
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    // pubsub.publish(USER_ADDED, user);
    // Queue.add(MAIL_JOBS.REGISTRATION_MAIL, { user });

    return user;
  } catch (e) {
    console.log("erro");
  }
};
