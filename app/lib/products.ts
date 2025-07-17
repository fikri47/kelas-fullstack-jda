// Simpan data di memory (bisa diganti dengan database)
let products = [
  { id: 1, name: "Buku Tauhid", price: 50000 },
  { id: 2, name: "Sirah Nabawiyah", price: 75000 },
];

export const getProducts = () => products;

export const addProduct = (product: Omit<Product, 'id'>) => {
  const newProduct = { 
    id: products.length + 1, 
    ...product 
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: number, updates: Partial<Product>) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  products[index] = { ...products[index], ...updates };
  return products[index];
};

export const deleteProduct = (id: number) => {
  products = products.filter(p => p.id !== id);
  return id;
};

type Product = {
  id: number;
  name: string;
  price: number;
};