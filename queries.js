const DB_ROOT = './data/root/';

const range = n => [...Array(n || 0)].map((v, i) => i);
const { db, list, get, create, remove } = require('./utils')(DB_ROOT);

const main = async () => {
  const nbPlops = 10

  console.log('create '+nbPlops+' plops')
  range(nbPlops).forEach(i =>
    create('plops', {
      id: i,
      name: 'mon plop ' + i,
      description000: i + ' ma description bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    })
  );

  console.log('remove '+nbPlops+' plops')
  range(nbPlops).forEach(i => remove('plops', i));

  console.log(['plops'].join('/'), get(['plops']));

  const hello = create('hellos', {
    id: 1,
    name: 'mon hello'
  });

  const product = create('products', {
    id: 6,
    name: 'mon produit'
  });

  console.log({ tables: db });
  console.log(['products', 6].join('/'), get(['products', 6]));
  console.log(['categories', 1, 'products'].join('/'), get(['categories', 1, 'products']));
  console.log(['categories'].join('/'), get(['categories']));
  console.log(
    ['categories', 1, 'products', 1, 'categories'].join('/'),
    get(['categories', 1, 'products', 1, 'categories'])
  );
};

main();
