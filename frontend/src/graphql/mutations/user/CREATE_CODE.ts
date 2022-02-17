import { gql } from "@apollo/client";

const CREATE_CODE = gql`
  mutation ($input: CodeInput) {
    createCode(input: $input) {
      code
      user {
        email
      }
    }
  }
`;

export default CREATE_CODE;
