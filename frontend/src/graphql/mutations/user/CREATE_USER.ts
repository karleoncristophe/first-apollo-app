import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($input: userInput) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;
export default CREATE_USER;
