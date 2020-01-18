const yargs = require('yargs').scriptName('nodejs-tp');
const {importingToDB} = require('./utils');

yargs.command('import [file]', ' - Import file', (y) => {
  y.positional('file', {
    type: 'string',
    default: './json/ingredients-sample.json',
    describe: 'Importing a file into the DB'
    })
  }, (argv) => {
    console.log(`Importing the following file into the DB - ${argv.file}`);
    importingToDB(argv.file);
  }).help().argv

