import { faker } from '@faker-js/faker';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = function(knex, Promise) {
    return knex("authors").del()
        .then(() => {
            return knex("books").del();
        })
        .then(() => {
            const authors = [];

            for (let index = 0; index < 3; index++) {
                authors.push({
                    name: faker.lorem.sentence(),
                    bio: faker.lorem.sentence(),
                    birthdate: faker.date.recent()
                });
            }

            return knex("authors").insert(authors);
        })
        .then(() => {
            return knex('authors').pluck('id').then((postIds) => {
                const books = [];

                for (let index = 0; index < 10; index++) {
                    books.push({
                        title: faker.lorem.sentence(),
                        description: faker.date.recent(),
                        published_date: faker.date.recent(),
                        author_id: faker.helpers.arrayElement(postIds)
                    })
                }

                return knex("books").insert(books);
            });                
        })
    };