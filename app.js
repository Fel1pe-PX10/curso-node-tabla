const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');



console.clear();


/* const [ , , arg3 = 'base=1'] = process.argv;
const [ , base = 1] = arg3.split('='); */
// console.log( process.argv );



crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( (archivo) => console.log(`${archivo.rainbow} creado`))
    .catch( erro => console.log ); 