import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccoutn";
import LogIn from "../pages/LogIn";
import { useQuery } from "@apollo/client";
import TOKEN from "../graphql/queries/TOKEN";
import RecoverPassword from "../pages/forgotAndResetPasswod/RecoverPassword";
import ResetPassword from "../pages/forgotAndResetPasswod/ResetPassword";
import SendCode from "../pages/forgotAndResetPasswod/SendCode";

const Router = () => {
  const { data } = useQuery(TOKEN);

  return (
    <Routes>
      {data.token ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<LogIn />} />
      )}

      <Route path="/createAccount" element={<CreateAccount />} />

      <Route path="/recoverPassword" element={<RecoverPassword />} />

      <Route path="/resetPassword" element={<ResetPassword />} />

      <Route path="/sendCode" element={<SendCode />} />
    </Routes>
  );
};

export default Router;
