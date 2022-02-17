import { gql } from "@apollo/client";

const ISLOGGEDIN = gql`
  mutation ($input: userLogInInput) {
    logInUser(input: $input) {
      user {
        id
        email
        name
      }
      token
    }
  }
`;

export default ISLOGGEDIN;
