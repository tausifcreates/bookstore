import knex from "knex";
import knexfile from "../../knexfile.cjs";

export const db = knex(knexfile.development);
