const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async( base = 1, listar, hasta ) => {
    
    try {

        
            let salida = '';

            for (let index = 1; index <= hasta; index++) {
                salida += `${base} X ${index} = ${base * index}\n`;
            }

            if(listar){
                console.log('===================='.green);
                console.log(`${colors.green('TABLA DEL')} ${colors.blue(base)}`);
                console.log(`====================`.green);
                console.log(salida);
            }
                
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}.txt creado`;

    } catch (error) {

        throw error;

    }

    
}

module.exports = {
    crearArchivoTabla
}
