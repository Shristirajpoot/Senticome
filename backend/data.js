import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Hashim',
      email: 'samimaniyar2003@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },/*hi user*/
    {
      name: 'Kusum',
      email: 'kusum2003k@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 0,
      numReviews: 0,
      description: 'High quality shirt',
      reviews: [],
    },
    {
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 0,
      numReviews: 0,
      description: 'High quality product',
      reviews: [],
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 0,
      numReviews: 0,
      description: 'High quality product',
      reviews: [],
    },
    {
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 0,
      numReviews: 0,
      description: 'High quality product',
      reviews: [],
    },

  ],
};

export default data;
