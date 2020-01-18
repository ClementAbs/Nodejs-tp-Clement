const yargs = require('yargs').scriptName('nodejs-tp');
const {importingToDB} = require('./utils');

yargs.command('import [file]', ' - Import file', (y) => {
  y.positional('file', {
    type: 'string',
    default: './json/ingredients-sample.json',
    describe: 'Importation d un fichier dans la BDD'
    })
  }, (argv) => {
    console.log(`Importation d'un fichier dans la BDD - ${argv.file}`);
    importingToDB(argv.file);
  }).help().argv

