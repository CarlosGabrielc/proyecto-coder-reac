import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../main.jsx';
import Item from './Item';
import productsList from "../mock/products.whitoutids";

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const uploadedProducts = await uploadProductsToFirebase();
            setProducts(uploadedProducts);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    async function uploadProductsToFirebase() {
        try {
            const itemsCollection = collection(db, 'items');
            console.log('Cargando productos a Firebase...');
    
            // Obtener productos existentes en Firebase
            const snapshot = await getDocs(itemsCollection);
            const existingProductsSet = new Set(snapshot.docs.map(doc => doc.data().name.trim().toLowerCase())); // Normalizar nombres
    
            // Filtrar productos que no están ya en Firebase
            const uniqueProducts = productsList.filter(product => {
                const productName = product.name.trim().toLowerCase(); // Normalizar nombre del producto
                const isUnique = !existingProductsSet.has(productName);
                if (!isUnique) {
                    console.log(`Producto duplicado encontrado: ${productName}`);
                }
                return isUnique;
            });
    
            // Subir cada producto único
            const promises = uniqueProducts.map(async product => {
                const productName = product.name.trim().toLowerCase();
                if (!existingProductsSet.has(productName)) {
                    return addDoc(itemsCollection, product);
                }
            });
            await Promise.all(promises);
    
            console.log('Productos cargados exitosamente');
    
            // Obtener los productos recién cargados
            const newSnapshot = await getDocs(itemsCollection);
            return newSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Error al cargar productos:", error);
            return [];
        }
    }

    return (
        <div>
            <h1 className='title'>Lista de productos</h1>
            <hr />
            <div className="container">
                {products.map((product) => (
                    <Item 
                        className="item" 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemDetailContainer;