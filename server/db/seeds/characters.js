exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('characters')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('characters').insert([
        {
          id: 1,
          name: 'Commander Zavala',
          image: 'zavala.jpg',
          class: 'Titan',
          bio: 'Commander Zavala is an Awoken Guardian who serves as the Vanguard of the Titan class, and overall Vanguard Commander of The Last City. ',
        },
        {
          id: 2,
          name: 'Ikora Rey',
          image: 'ikora.jpg',
          class: 'Warlock',
          bio: 'Ikora Rey is a human and the Vanguard of the Warlock class. Once the disciple of Osiris, Ikoras extensive knowledge of her field has earned her respect amongst all Warlock Orders and led to her replacing her exiled mentor as Vanguard.',
        },
        {
          id: 3,
          name: 'Empress Caiatl',
          image: 'caiatl.jpg',
          class: 'Warrior Princess',
          bio: 'Empress Caiatl, formerly known as the Princess-Imperial, is the current Empress of the Cabal Empire and daughter of the former, exiled Emperor Calus.',
        },
      ])
    })
}
