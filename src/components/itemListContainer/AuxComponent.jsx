import { useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, query ,where} from 'firebase/firestore'




function AuxComponent() {
    // un item
    // useEffect(()=>{
    //     const db = getFirestore()
    // const prodRef=doc(db,'items','4rwewIXP8LGA9EK6Ktzy');
    // getDoc(prodRef).then((snapShot)=>{
    //     if(snapShot.exists()){
    //         console.log({id:snapShot.id,...snapShot.data()});
    //         // setproduct

    //     }
    // })


    // },[]);\

    // toda la coleccion
    // useEffect(() => {
    //     const db = getFirestore()
    //     const itemsCollections = collection(db, 'items');
    //     getDocs(itemsCollections).then((snapShot) => {
    //         if (snapShot.size === 0) {
    //             console.log('No hay productos');
    //         } else {
    //             snapShot.forEach((doc) => {
    //                 console.log({ id: doc.id, ...doc.data() });

    //             })
    //         }
    //     })


    // }, []);


    // condiciones
    // useEffect(() => {
    //     const db = getFirestore()
    //     const q = query(collection(db, "items"), where("price", ">", 1000), where('category', "==", "Perfumes"))



    //     getDocs(q).then((snapShot) => {
    //         if (snapShot.size === 0) console.log("No hay productos");
    //         console.log(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    //     });


    // }, []);

    return (
        <div>AuxComponent</div>
    )
}

export default AuxComponent