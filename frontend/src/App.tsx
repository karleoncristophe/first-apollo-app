import Router from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
