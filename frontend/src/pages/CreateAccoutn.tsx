import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import CREATE_USER from "../graphql/mutations/user/CREATE_USER";

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

const SignUpContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 0 1.2em #b4b4b4;
`;

const CreateAccountContent = styled.form`
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

const CrateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const submit = async (event: any) => {
    try {
      setLoading(true);

      const input = {
        name: name,
        email: email,
        password: password,
      };

      await createUser({
        variables: { input: input },
      });

      alert("Usuário Criado");

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <SignUpContent>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <CreateAccountContent>
            <Title>Sing Up</Title>
            <SubTitle>Create an account and enjoy!</SubTitle>
            <InputText>Name</InputText>
            <Input
              autoFocus
              placeholder="Type a name."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText>Email</InputText>
            <Input
              placeholder="Type a email."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText>Password</InputText>
            <Input
              name="password"
              autoComplete="on"
              type="password"
              placeholder="Type a password."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/">
              <GoToHome onClick={submit}>Create an Account</GoToHome>
            </Link>
          </CreateAccountContent>
        )}
      </SignUpContent>
    </Container>
  );
};

export default CrateAccount;
