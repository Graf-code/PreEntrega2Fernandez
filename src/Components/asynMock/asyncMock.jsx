const products = [
    {
      id: '1',
      name: 'HTML',
      price: 3000,
      category: 'Programacion-Web',
      img: "../public/assets/html5.svg",
      stock: 5,
      description: 'Descripcion del producto 1',
    },
    {
      id: '2',
      name: 'CSS',
      price: 3200,
      category: 'Programacion-Web',
      img: '../public/assets/css3.svg',
      stock: 3,
      description: 'Descripcion del producto 2',
    },
    {
      id: '3',
      name: 'JAVASCRIPT',
      price: 6200,
      category: 'Programacion-Web',
      img: '../public/assets/javascript.svg',
      stock: 5,
      description: 'Descripcion del producto 3',
    },
    {
      id: '4',
      name: 'C++',
      price: 9800,
      category: 'Lenguajes-de-Programacion',
      img: '../public/assets/c.svg',
      stock: 5,
      description: 'Descripcion del producto 4',
    },
    {
      id: '5',
      name: 'RUBY',
      price: 4200,
      category: 'Lenguajes-de-Programacion',
      img: '../public/assets/ruby.svg',
      stock: 5,
      description: 'Descripcion del producto 5',
    },
    {
      id: '6',
      name: 'PHYTON',
      price: 5600,
      category: 'Lenguajes-de-Programacion',
      img: '../public/assets/python.svg',
      stock: 5,
      description: 'Descripcion del producto 6',
    },
    {
      id: '7',
      name: 'JAVA',
      price: 6500,
      category: 'Lenguajes-de-Programacion',
      img: '../public/assets/java.svg',
      stock: 5,
      description: 'Descripcion del producto 7',
    },
    {
      id: '8',
      name: 'MONGODB',
      price: 7850,
      category: 'Bases-de-Datos',
      img: '../public/assets/mongodb.svg',
      stock: 5,
      description: 'Descripcion del producto 8',
    },
    {
      id: '9',
      name: 'MYSQL',
      price: 7450,
      category: 'Bases-de-Datos',
      img: '../public/assets/mysql.svg',
      stock: 5,
      description: 'Descripcion del producto 9',
    },
    {
      id: '10',
      name: 'POSTGRESQL',
      price: 3870,
      category: 'Bases-de-Datos',
      img: '../public/assets/postgresql.svg',
      stock: 5,
      description: 'Descripcion del producto 10',
    },
  ];
  
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
