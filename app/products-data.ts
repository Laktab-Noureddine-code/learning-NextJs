export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: '123',
    name: 'Hat',
    image: 'hat.jpg',
    description: 'Cheer the team on in style with our unstructured, low crown cap.',
    price: 29,
  },
  {
    id: '234',
    name: 'Mug',
    image: 'mug.jpg',
    description: 'Enjoy your morning coffee or tea in the company of your favorite team logo.',
    price: 16,
  },
  {
    id: '345',
    name: 'Classic T-Shirt',
    image: 'tshirt.jpg',
    description: 'A comfortable, 100% cotton tee perfect for everyday wear.',
    price: 24,
  },
  {
    id: '456',
    name: 'Cozy Hoodie',
    image: 'hoodie.jpg',
    description: 'Stay warm during evening games with this fleece-lined pullover hoodie.',
    price: 55,
  },
];