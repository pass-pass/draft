const { partial } = require('ramda');

const createdAt = a => a.created_at;
const idGreater4 = a => a.id > 4;
// const partial = o => o.created_at;

let i = 0;
const users = [
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  },
  {
    id: i++,
    name: 'plop',
    created_at: new Date()
  }
];

const filter = array => by => array.filter(by);

// const since = partial(users.filter);

console.log(filter(users)(idGreater4));
