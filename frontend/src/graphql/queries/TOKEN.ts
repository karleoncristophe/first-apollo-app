import { gql } from "@apollo/client";

const TOKEN = gql`
  query token {
    token @client
  }
`;

export default TOKEN;
