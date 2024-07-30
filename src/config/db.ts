import knex from "knex";
import knexfile from "./../knex/knexfile.cjs";

export const db = knex(knexfile.development);
