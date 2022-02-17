import { useApolloClient, useQuery } from "@apollo/client";
import USERS from "../graphql/queries/USERS";
import LOCAL_USER from "../graphql/queries/LOCAL_USER";
import { tokenVar } from "../graphql/cache";

interface Data {
  id: string;
  name: string;
  email: string;
}

const Home = () => {
  const { data: { users = [] } = {} } = useQuery(USERS);

  const { data } = useQuery(LOCAL_USER);

  const client = useApolloClient();

  // useEffect(() => {
  //   if (!data?.localUser?.name) {
  //     usersVar({
  //       id: "1",
  //       name: "Cabra da peste",
  //       email: "cabra da peste@tatudoerrado.com",
  //     });
  //   }
  // }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>
        Logado: {data.localUser.name} | {data.localUser.email}
      </h1>
      {users.map((item: Data) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3>name: {item.name}</h3>
          <h3>name: {item.email}</h3>
        </div>
      ))}

      <button
        onClick={() => {
          client.cache.evict({ fieldName: "isLoggedIn" || "localUser" });
          client.cache.gc();

          localStorage.removeItem("@token");
          localStorage.removeItem("@localUser");

          tokenVar(false);
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
