const productsList = [
  // Perfumes arabaes
  {
    "id": 1,
    "category": "Oud",
    "name": "Amber Oud Gold Edition",
    "description": "Una fragancia unisex con notas de bergamota, melón, piña y ámbar, que ofrece una experiencia olfativa lujosa y duradera.",
    "price": "85.00",
    "stock": 20,
    "image": "https://acdn.mitiendanube.com/stores/002/708/808/products/arabe-75-647b1a5ab2641a604817233943467804-1024-1024.png"
  },
  {
    "id": 2,
    "category": "Floral",
    "name": "Yara Lattafa",
    "description": "Perfume femenino con aroma dulce y tropical, combinando notas de mandarina, orquídea, frutas tropicales, vainilla y sándalo.",
    "price": "25.00",
    "stock": 15,
    "image": "https://acdn.mitiendanube.com/stores/002/708/808/products/arabe-5-c1c7cdfbd2484a437917306444058852-1024-1024.png"
  },
  {
    "id": 3,
    "category": "Especiado",
    "name": "Hawas for Him",
    "description": "Una fragancia masculina que mezcla notas de canela, bergamota, naranja y ámbar gris, ofreciendo un aroma fresco y especiado.",
    "price": "60.00",
    "stock": 10,
    "image": "https://http2.mlstatic.com/D_NQ_NP_635697-MLA74752781790_032024-O.webp"
  },
  {
    "id": 4,
    "category": "Amaderado",
    "name": "Kashkha",
    "description": "Perfume unisex con una mezcla de notas amaderadas y especiadas, incluyendo manzana, canela, cardamomo y almizcle.",
    "price": "45.00",
    "stock": 12,
    "image": "https://m.media-amazon.com/images/I/71GvDzIHjCL.jpg"
  },
  {
    "id": 5,
    "category": "Dulce",
    "name": "Amaali",
    "description": "Fragancia femenina que combina notas de frutas, flores y almizcle, creando un aroma dulce y seductor.",
    "price": "35.00",
    "stock": 18,
    "image": "https://img.fragrancex.com/images/products/parent/medium/78395w.jpg"
  },
  {
    "id": 6,
    "category": "Oud",
    "name": "Shaghaf Oud Aswad",
    "description": "Una intensa fragancia unisex con notas de oud, azafrán, vainilla y cuero, ofreciendo una experiencia rica y profunda.",
    "price": "70.00",
    "stock": 9,
    "image": "https://http2.mlstatic.com/D_NQ_NP_832027-MLU69615892531_052023-O.webp"
  },
  {
    "id": 7,
    "category": "Amaderado",
    "name": "Arabian Nights Gold",
    "description": "Perfume unisex que mezcla notas de oud, ámbar y especias, evocando la esencia de las noches árabes.",
    "price": "90.00",
    "stock": 7,
    "image": "https://fimgs.net/mdimg/perfume/375x500.21599.jpg"
  },
  {
    "id": 8,
    "category": "Floral",
    "name": "Aurum Summer",
    "description": "Fragancia femenina con una mezcla vibrante de flores y frutas, perfecta para el verano.",
    "price": "50.00",
    "stock": 14,
    "image": "https://http2.mlstatic.com/D_Q_NP_883579-MLU74067582851_012024-O.webp"
  },
  {
    "id": 9,
    "category": "Especiado",
    "name": "Black Oud",
    "description": "Perfume unisex que combina notas de oud, especias y maderas oscuras, creando un aroma misterioso y profundo.",
    "price": "65.00",
    "stock": 11,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SpsDCf4I1CddF0VGMFf2gqRSeQ93tiK-vQ&s"
  },
  {
    "id": 10,
    "category": "Dulce",
    "name": "Wisal Dhahab",
    "description": "Fragancia unisex con notas de frutas, flores y almizcle, ofreciendo un aroma dulce y refrescante.",
    "price": "55.00",
    "stock": 13,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a1z01-NAsBHA7XDNDm-WpEfI85Q44c5uUg&s"
  },
    // Electrodomésticos
    {
    "id": 11,
    "categoria": "Electrodomésticos",
    "name": "Heladera Whirlpool 300L",
    "description": "Heladera con freezer de 300L, tecnología no frost.",
    "price": 750,
    "stock": 10,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltpPakj4OE8W0P6-B2GpY_8J0hHslUZ15Mw&s"
  },
  {
    "id": 12,
    "categoria": "Electrodomésticos",
    "name": "Microondas Samsung 23L",
    "description": "Microondas con grill y control digital.",
    "price": 120,
    "stock": 10,
    "image": "https://images.samsung.com/is/image/samsung/ar-microwave-oven-grill-mg23f3k3tas-mg23f3k3tas-bg-001-front-silver-thumb-1"
  },
  {
    "id": 13,
    "categoria": "Electrodomésticos",
    "name": "Lavarropas LG 8kg",
    "description": "Lavarropas automático con 10 programas de lavado.",
    "price": 500,
    "stock": 9,
    "image": "https://www.lg.com/ar/images/lavarropas/t8005te/gallery/large01.jpg"
  },
  {
    "id": 14,
    "categoria": "Electrodomésticos",
    "name": "Aire Acondicionado Split 3000W",
    "description": "Aire acondicionado frío/calor de 3000W.",
    "price": 600,
    "stock": 12,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8XPZYUu9kvUtbOsw0-v7TowcaUNe4Znz8w&s"
  },
  {
    "id": 15,
    "categoria": "Electrodomésticos",
    "name": "Cafetera Nespresso",
    "description": "Cafetera automática para cápsulas Nespresso.",
    "price": 200,
    "stock": 6,
    "image": "https://images.fravega.com/f1000/b7e6645995f52a8a5226be9f52d6c3ae.jpg"
  },

  // Smartwatches
  {
    "id": 16,
    "categoria": "Smartwatches",
    "name": "Apple Watch Series 9",
    "description": "Reloj inteligente con GPS y pantalla Always-On.",
    "price": 399,
    "stock": 15,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-aF_ddTM6jYAYO94k-hdmVNayUTfrJ3WzQ&s"
  },
  {
    "id": 17,
    "categoria": "Smartwatches",
    "name": "Samsung Galaxy Watch 6",
    "description": "Smartwatch con monitoreo de salud y carga rápida.",
    "price": 350,
    "stock": 7,
    "image": "https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-watch6-r935-sm-r930nzeaaro-537402293?$684_547_PNG$"
  },

  // Celulares
  {
    "id": 18,
    "categoria": "Celulares",
    "name": "iPhone 14 Pro",
    "description": "Celular con chip A16 Bionic y cámara de 48 MP.",
    "price": 999,
    "stock": 5,
    "image": "https://i5.walmartimages.com/asr/fee4af78-110f-467c-86d2-6d6f27ba1afe.8422413b3b9eb231cea3f43d11a5a5c4.jpeg"
  },
  {
    "id": 19,
    "categoria": "Celulares",
    "name": "Samsung Galaxy S23",
    "description": "Smartphone con Snapdragon 8 Gen 2.",
    "price": 899,
    "stock": 3,
    "image": "https://b2b.multipoint.com.ar/Image/0/750_750-[global-version]-sm-s918_galaxys23ultra_front_phantomblack_221122.jpg"
  },
  {
    "id": 20,
    "categoria": "Celulares",
    "name":  "xiaomi note 9",
    "description": "Smartphone con Snapdragon 8 Gen 2.",
    "price": 899,
    "stock": 3,
    "image": "https://http2.mlstatic.com/D_NQ_NP_989215-MLA75834275866_042024-O.webp"
  },
  
]


export default productsList;