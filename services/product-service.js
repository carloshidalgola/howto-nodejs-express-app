const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: 'omar',
        price: faker.commerce.price(),
        image: faker.image.imageUrl()
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;

  }

  find() {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(this.products);
      }, 0);
    });

    //return this.products;
  }

  async findOne(id) {
    const product  = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('Product not found');
    }

    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product, /// no quiero cambiar todo, quiero persistir los datos del producto
      ...changes ///y que apliques solo los nuevos cambios
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);

    return { id };
  }
}

module.exports = ProductService;
