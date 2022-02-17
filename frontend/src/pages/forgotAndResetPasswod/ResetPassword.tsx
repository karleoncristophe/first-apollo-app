import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import RESET_PASSWORD from "../../graphql/mutations/user/RESET_PASSWORD";

const Container = styled.div`
  display: flex;
  background: #e0e0e0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  font-family: "Inter", sans-serif;
`;

const AccountReoveryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 0 1.2em #b4b4b4;
`;

const AccountReoveryForm = styled.form`
  display: flex;
  font-family: "Acme", sans-serif;
  padding: 10px;
  flex-direction: column;
  width: 500px;
  border-radius: 10px;
`;

const Title = styled.h1`
  line-height: 20px;
  font-size: 2.7rem;
  font-weight: 600;
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #302f2f;
`;

const GoToHome = styled.button`
  border: none;
  border: none;
  height: 55px;
  width: 100%;
  border-radius: 15px;
  margin-top: 20px;
  background: #ffa908;
  font-size: 1.2rem;
  color: #ffffff;
  box-shadow: 0 0 1em #9c9c9c;
  &&:hover {
    background: #dd9510;
    transform: translateY(-3px);
    transition: 1s;
    color: #ffffff;
  }
`;

const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 10px;
  height: 50px;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
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

const ResetPassword = () => {
  const [updatePassword, { data }] = useMutation(RESET_PASSWORD);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const codeData = location.state;

  const submit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("senhas divergentes");
    }

    const input = {
      password: password,
      code: codeData.verify.code,
      user: codeData.verify.user,
    };
    await updatePassword({
      variables: {
        input: input,
      },
    });

    if (!data) {
      return;
    }

    navigate("/");
  };

  return (
    <Container>
      <AccountReoveryContent onSubmit={submit}>
        <AccountReoveryForm>
          <Title>Account recovery</Title>

          <SubTitle>User password</SubTitle>
          <Input
            autoFocus
            type="password"
            name="password"
            placeholder="Enter you new password. "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            name="New password"
            placeholder="Confirm your new password. "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <GoToHome
            disabled={password === "" || confirmPassword === ""}
            type="submit"
          >
            Confirm
          </GoToHome>
        </AccountReoveryForm>
      </AccountReoveryContent>
    </Container>
  );
};

export default ResetPassword;
