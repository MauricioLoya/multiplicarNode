const { crarArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];



switch (comando) {

    case 'listar':
    listar(argv.base, argv.limite);

    break;

    case 'crear':
    crarArchivo(argv.base).then((archivo) => {
        return console.log(`Archivo creado : ${argv.base}`);
    }).catch((err) => {
        console.error(err);
    });

    break;

    default:
    console.log('comando no recomicido');
}



// let base = process.argv[2].split('=')[1];

