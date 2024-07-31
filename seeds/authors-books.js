/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('books').del();
  await knex('authors').del();
  await knex('authors').insert([
    {id: 1, name: 'Erich Maria Remark', bio: 'A war veteran', birthdate: '1896-05-25'},
    {id: 2, name: 'Charles Dickens', bio: 'An English eriter', birthdate: '1893-12-04'},
    {id: 3, name: 'Jules Varne', bio: 'A fiction novelist', birthdate: '1890-06-21'},
  ]);
  await knex('books').insert([
    {id: 1, title: 'All Quiet On the Western Front', description: 'A book on WW1', published_date: '1945-07-22', author_id: 1},
    {id: 2, title: 'Oliver Twist', description: 'Tale of an orphan boy', published_date: '1945-07-22', author_id: 2},
    {id: 3, title: 'Around the World in 80 days', description: 'Fiction Novel', published_date: '1945-07-22', author_id: 3},
    {id: 4, title: 'A journey to the center of the earth', description: 'Fiction Novel', published_date: '1945-07-22', author_id: 3},
    {id: 5, title: 'David Copperfield', description: 'Tale of romance', published_date: '1945-07-22', author_id: 2},
  ]);
};
