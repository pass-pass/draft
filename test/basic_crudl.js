const DB_ROOT = './test/mockDATA/root/';
const { db, list, get, create, remove, update } = require('../utils')(DB_ROOT);

const assert = require('assert');

const entity = 'plops';
const resetEntity = () =>get([entity]).map(plop => remove(entity, plop.id));

describe('crudl', () => {
  beforeEach(resetEntity);
  afterEach(resetEntity);

  it('create', () => {
    const expected = [
      {
        id: 1,
        name: 'plop',
        price: 3.4,
        message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
      }
    ];

    assert.deepEqual(
      expected,
      create(entity, {
        id: 1,
        name: 'plop',
        price: 3.4,
        message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
      })
    );
  });

  it('read', () => {
    const expected = [
      {
        id: 1,
        name: 'plop',
        price: 3.4,
        message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
      }
    ];

    create(entity, {
      id: 1,
      name: 'plop',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    assert.deepEqual(expected, get([entity, 1]));
  });

  it('update', () => {
    create(entity, {
      id: 1,
      name: 'plop',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    assert.deepEqual(
      [
        {
          id: 1,
          name: 'plop',
          price: 3.4,
          message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
        }
      ],
      get([entity, 1])
    );

    update(entity, {
      id: 1,
      name: 'plop updated',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    assert.deepEqual(
      [
        {
          id: 1,
          name: 'plop updated',
          price: 3.4,
          message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
        }
      ],
      get([entity, 1])
    );
  });

  it('remove', () => {
    create(entity, {
      id: 1,
      name: 'plop',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    assert.deepEqual(
      [
        {
          id: 1,
          name: 'plop',
          price: 3.4,
          message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
        }
      ],
      get([entity, 1])
    );

    remove(entity, 1);

    assert.deepEqual([], get([entity, 1]));
  });

  it('list', () => {
    const expected = [
      {
        id: 1,
        name: 'plop',
        price: 3.4,
        message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
      },
      {
        id: 2,
        name: 'plop',
        price: 3.4,
        message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
      }
    ];

    create(entity, {
      id: 1,
      name: 'plop',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    create(entity, {
      id: 2,
      name: 'plop',
      price: 3.4,
      message: 'zeg zeg zekg kzehg kzeg kze gkze ghze ghzkegh kzeg kze gkzeg hkzegjk zheg'
    });

    assert.deepEqual(expected, get([entity]));
  });
});
