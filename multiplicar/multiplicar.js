const fs = require('fs');
const colors = require('colors');  


let listar = async(base, limite) => {

    console.log('================================'.yellow);
    console.log('===== TABLA DE MULTIPLICAR ====='.yellow);
    console.log(`============ DEL ${base}==============`.yellow);
    console.log(`========= HASTA EL ${limite} ===========`.yellow);

    // for (let i = 1; i <= limite; i++) {
    //     console.log(`${base} * ${i} = ${base*i}\n`);
    // }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data +=`${base} * ${i} = ${base*i}\n`;
    }
    fs.writeFile(`tablas/table_del_${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(err);
        }
        else {
            return console.log('El archivo ha sido creado.'.rainbow);
        }

    });
}


let crarArchivo = async (base) => {

    if (!Number(base)){
        throw new Error (`El valor introcucido no es un número.`);
        return;
    }
    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} =  ${i * base} \n`;
    }

    fs.writeFile(`tablas/table_del_${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(err);
        }
        else {
            return 'El archivo ha sido creado.';
        }

    });
}

module.exports = {
    crarArchivo,
    listar
}



