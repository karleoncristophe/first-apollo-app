import { gql } from "@apollo/client";

const VERIFY_CODE = gql`
  mutation ($code: Int) {
    verify(code: $code) {
      code
      id
      user
    }
  }
`;

export default VERIFY_CODE;
