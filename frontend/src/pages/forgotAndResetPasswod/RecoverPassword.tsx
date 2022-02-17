import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import CREATE_CODE from "../../graphql/mutations/user/CREATE_CODE";

import USERS from "../../graphql/queries/USERS";

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

const RecoverPassword = () => {
  const { data: { users = [] } = {} } = useQuery(USERS);

  const [createCode, { data }] = useMutation(CREATE_CODE);

  const [email, setEmail] = useState("");

  const navigate: any = useNavigate();

  const submit = async (e: any) => {
    e.preventDefault();

    const usermail = await users.map((item: any) => {
      if (email !== item.email) {
        return alert("O email não existe.");
      } else {
        const user = {
          email: email,
        };
        createCode({
          variables: {
            input: user,
          },
        });

        if (!data) {
          return;
        }

        navigate("/sendCode");
      }
    });

    return usermail;
  };
  return (
    <Container>
      <AccountReoveryContent>
        <AccountReoveryForm onSubmit={submit}>
          <Title>Account recovery</Title>

          <SubTitle>User email</SubTitle>
          <Input
            autoFocus
            placeholder="Enter you email. "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <GoToHome type="submit">Confirm</GoToHome>
        </AccountReoveryForm>
      </AccountReoveryContent>
    </Container>
  );
};

export default RecoverPassword;
