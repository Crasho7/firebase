const usuario = {
    nombre: 'Susana',
    activo: true,
    fechaNaci: 0,
    salario: 1500
}


//isertar un registro, si la coleccion no existe la crea
/*
db.collection('usuarios').add(usuario)
    .then(docRef => {
        console.log(docRef);
    })
    .catch(err => console.log('error', err));
    */

const usuariosRef = db.collection('usuarios');

//update un registro
/*usuariosRef.doc('eF7pPLHKbRA6pgOqKIzY').update({
    activo: true
});*/

//borra todas las propiedades del objeto y pone las nuevas
//es destructivo
/*
usuariosRef.doc('eF7pPLHKbRA6pgOqKIzY').set({
    activo: true,
    estadoCivil: 'casado',
    edad: 32
});*/

//borrar un documento
//usuariosRef.doc('eF7pPLHKbRA6pgOqKIzY').delete();

//select * from usuarios
//este crea un obserbable que esta pendiente de los cambios, recomendado para sockets
//usuariosRef.onSnapshot(retornaDocumentos);

//de esta manera no se crea un obserbable
//usuariosRef.get().then(retornaDocumentos);

// slect * from usuariarios where activo = true
usuariosRef.where('activo', '==', true).get().then(retornaDocumentos);

// slect * from usuariarios where salario >= 1800
usuariosRef.where('salario', '>=', 1800).get().then(retornaDocumentos);

// slect * from usuariarios where salario >= 1800 and salario <= 2300
usuariosRef.where('salario', '>=', 1800)
    .where('salario', '<=', 2300)
    .get().then(retornaDocumentos);

// slect * from usuariarios where salario >= 1800 and activo == true

usuariosRef.where('salario', '>=', 1800)
    .where('activo', '==', true)
    .get().then(retornaDocumentos);

    
//orderby
//select * from usuarios order by nombre asc, salario asc
usuariosRef.orderBy('nombre')
    .orderBy('salario').get().then(retornaDocumentos)