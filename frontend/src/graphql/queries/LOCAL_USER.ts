import { gql } from "@apollo/client";

const LOCAL_USER = gql`
  query localUser {
    localUser @client {
      id
      name
      email
    }
  }
`;

export default LOCAL_USER;
