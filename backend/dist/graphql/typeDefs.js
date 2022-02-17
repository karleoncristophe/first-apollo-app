"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const graphql_1 = require("graphql");
const typesArray = (0, load_files_1.loadFilesSync)(`${__dirname}/schemas/**/*.gql`);
const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
const printedTypeDefs = (0, graphql_1.print)(typeDefs);
exports.default = printedTypeDefs;
