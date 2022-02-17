import { gql } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation ($input: ResetPasswordInput) {
    updatePassword(input: $input) {
      code
      user
    }
  }
`;
export default RESET_PASSWORD;
