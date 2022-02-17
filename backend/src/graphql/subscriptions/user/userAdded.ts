import { pubsub } from "../../../server";
import { USER_ADDED } from "./channels";

const userAdded = async (obj: any, args: any) => {
  console.log(JSON.stringify(pubsub));
  return pubsub.asyncIterator(USER_ADDED);
};

const link = {
  subscribe: userAdded,
  resolve: (payload: any) => {
    return payload;
  },
};

export default link;
