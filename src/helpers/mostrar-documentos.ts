import firebase from 'firebase';

export const retornaDocumentos = (snapshot: firebase.firestore.QuerySnapshot) => {
    const documentos: any[] = [];
    snapshot.forEach(item => {
        documentos.push({
            id: item.id,
            ...item.data()
        });
    });
    console.log(documentos);
    return documentos;
} 