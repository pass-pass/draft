const DB_ROOT = './test/mockDATA/root/';
const { db, list, get, create, remove, update } = require('../utils')(DB_ROOT);

const assert = require('assert');

const entity = 'plops';
const resetEntity = () => get([entity]).map(plop => remove(entity, plop.id));

describe('relations', () => {
  beforeEach(resetEntity);
  afterEach(resetEntity);

  it('belongsTo', () => {
    assert.equal(false, 'TODO BASTARDO !!!!!');
  });

  // it('belongsToMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('hasMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('hasManyThrough', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('hasOne', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('hasOneOrMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphOne', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphOneOrMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphPivot', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphTo', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('morphToMany', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

  // it('pivot', () => {
  //   assert.equal(false, 'TODO BASTARDO !!!!!');
  // });

});
