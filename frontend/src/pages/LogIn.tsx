import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokenVar, usersVar } from "../graphql/cache";
import ISLOGEDDIN from "../graphql/mutations/user/ISLOGGEDIN";

const Conteiner = styled.div`
  display: flex;
  background: #e0e0e0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  font-family: "Inter", sans-serif;
`;

const SignInContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 700px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 0 1.2em #b4b4b4;
`;

const GetStartedContent = styled.form`
  display: flex;
  padding: 10px;
  flex-direction: column;
  background: #faebeb16;
  width: 500px;
  border-radius: 10px;
`;

const Title = styled.h1`
  line-height: 25px;
  font-size: 2.7rem;
  font-weight: 600;
`;

const SubTitle = styled.span`
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: 500;
  color: #302f2f;
`;

const InputText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #5a5858;
`;

const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 10px;
  height: 50px;
  width: 100%;
  font-size: 1rem;
  padding: 10px;
  outline: none;
  background: none;
  border: 1.5px solid#ffa500;
  border-top: none;
  border-right: none;
  border-left: none;
  &&:focus {
    border: 2px solid#ffa500;
    border-radius: 10px;
  }
  &&:hover {
    border: 2px solid#ffa500;
    border-radius: 10px;
  }
`;

const SignIn = styled.button`
  border: none;
  height: 55px;
  width: 100%;
  border-radius: 10px;
  margin-top: 30px;
  background: #e0e0e0;
  font-size: 1.2rem;
  color: #ffa908;
  &&:hover {
    transition: 1s;
    transform: translateY(-3px);
    color: #ffffff;
    box-shadow: 0 0 1em #b6b6b6;
    background: #ffa908;
  }
`;

const SignUp = styled.button`
  border: none;
  height: 55px;
  width: 100%;
  border-radius: 15px;
  margin-top: 20px;
  background: #ffa908;
  box-shadow: 0 0 1em #9c9c9c;
  font-size: 1.2rem;
  color: #ffffff;
  &&:hover {
    background: #dd9510;
    transform: translateY(-3px);
    transition: 1s;
    color: #ffffff;
  }
`;

// const ForgotPassword = styled.span`
//   font-size: 1rem;
//   color: #ffa500;
//   text-decoration: underline;
//   cursor: pointer;
//   &&:hover {
//     color: #d68d06;
//   }
// `;

const CreateAccountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const CreateAccount = styled.span`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px 13px 0px 13px;
  color: #5a5858;
`;

const Line = styled.div`
  display: flex;
  width: 30%;
  height: 1px;
  background: #bebaba;
`;

const ForgotPassword = styled.span`
  font-size: 1rem;
  color: #ffa500;
  text-decoration: underline;
  cursor: pointer;
  &&:hover {
    color: #d68d06;
  }
`;

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logInUser] = useMutation(ISLOGEDDIN, {
    onCompleted({ logInUser }) {
      if (logInUser) {
        localStorage.setItem("@token", logInUser.token as string);
        localStorage.setItem(
          "@localUser",
          JSON.stringify(usersVar(logInUser.user))
        );
        tokenVar(true);

        console.log(logInUser);
      }
    },
  });

  // const clear = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  const submit = async (e: any) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    await logInUser({
      variables: {
        input: user,
      },
    });
  };

  return (
    <Conteiner>
      <SignInContent>
        <GetStartedContent>
          <Title>Sign In</Title>
          <SubTitle>Welcome, we missed you!</SubTitle>
          <InputText>Your Email</InputText>
          <Input
            autoFocus
            placeholder="Enter you email. "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputText>Password</InputText>
          <Input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="Enter you password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px" }}
          />

          <Link to="recoverPassword">
            <ForgotPassword>Forgot Password?</ForgotPassword>
          </Link>

          <SignIn onClick={submit} disabled={email === "" || password === ""}>
            Sign In
          </SignIn>

          <CreateAccountContent>
            <Line />
            <CreateAccount>or create an account</CreateAccount>
            <Line />
          </CreateAccountContent>
          <Link to="/createAccount">
            <SignUp disabled={email !== "" || password !== ""}>Sign Up</SignUp>
          </Link>
        </GetStartedContent>
      </SignInContent>
    </Conteiner>
  );
};

export default LogIn;
