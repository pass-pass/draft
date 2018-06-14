const fs = require('fs');
const mkdirp = require('mkdirp');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
// const writeFileAsync = promisify(fs.writeFile);

const deleteFolderRecursive = async path => {
  // console.log({path});
  // const { stdout } = await exec('find -L ' + path + '/../..' + ' -samefile ' + path);
  // stdout.split('\n').map(deleteFolderRecursive);
  // console.log({ stdout: stdout.split('\n') });

  fs.existsSync(path) &&
    fs.readdirSync(path).forEach(async (file, index) => {
      const curPath = path + '/' + file;
      fs.lstatSync(curPath).isDirectory()
        ? await deleteFolderRecursive(curPath)
        : fs.unlinkSync(curPath);
    });
  fs.rmdirSync(path);
};

const _get = _ROOT => path =>
  fs.existsSync(_ROOT + path.join('/'))
    ? fs
        .readdirSync(_ROOT + path.join('/'))
        .map(dir => (['data.json'].includes(dir) ? path.pop() : dir))
        .map(id => ({
          id,
          ...JSON.parse(fs.readFileSync(_ROOT + [...path, id, 'data.json'].join('/')))
        }))
    : [];

module.exports = DB_ROOT => ({
  db: fs.readdirSync(DB_ROOT).filter(dir => !['_indexes', 'root'].includes(dir)),
  relation: (target, path, type = 'dir') => fs.symlinkSync(target, path, type),
  list: path => fs.readdirSync(DB_ROOT + path.join('/')),
  get: _get(DB_ROOT),
  remove: async (type, id) =>
    await deleteFolderRecursive([fs.realpathSync(DB_ROOT), '_indexes', type, id].join('/')),
  update: (type, { id, ...dataToSave }) => {
    const REAL_DB_ROOT = fs.realpathSync(DB_ROOT);

    const pathDir = DB_ROOT + ['_indexes', type, id].join('/');
    const pathFile = DB_ROOT + ['_indexes', type, id, 'data.json'].join('/');

    mkdirp.sync(pathDir);

    if (!fs.existsSync(REAL_DB_ROOT + '/' + type)) {
      fs.symlinkSync('_indexes/' + type, REAL_DB_ROOT + '/' + type, 'dir');
    }

    fs.writeFileSync(pathFile, JSON.stringify(dataToSave, null, 2));
    return _get(DB_ROOT)([type, id]);
    // return writeFileAsync(pathFile, JSON.stringify(dataToSave, null, 2)).then(err => {
    // if (err) throw err;
    // console.log('now');
    // return _get(DB_ROOT)([type, id]);
    // });
  },
  create: (type, { id, ...dataToSave }) => {
    const REAL_DB_ROOT = fs.realpathSync(DB_ROOT);

    const pathDir = DB_ROOT + ['_indexes', type, id].join('/');
    const pathFile = DB_ROOT + ['_indexes', type, id, 'data.json'].join('/');

    mkdirp.sync(pathDir);

    if (!fs.existsSync(REAL_DB_ROOT + '/' + type)) {
      fs.symlinkSync('_indexes/' + type, REAL_DB_ROOT + '/' + type, 'dir');
    }

    fs.writeFileSync(pathFile, JSON.stringify(dataToSave, null, 2));
    return _get(DB_ROOT)([type, id]);
    // return writeFileAsync(pathFile, JSON.stringify(dataToSave, null, 2)).then(err => {
    // if (err) throw err;
    // console.log('now');
    // return _get(DB_ROOT)([type, id]);
    // });
  }
});
