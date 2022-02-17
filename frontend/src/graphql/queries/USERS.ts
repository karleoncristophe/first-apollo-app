import { gql } from "@apollo/client";

const USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`;

export default USERS;
