import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";

const typesArray = loadFilesSync(`${__dirname}/schemas/**/*.gql`);
const typeDefs = mergeTypeDefs(typesArray);
const printedTypeDefs = print(typeDefs);

export default printedTypeDefs;
