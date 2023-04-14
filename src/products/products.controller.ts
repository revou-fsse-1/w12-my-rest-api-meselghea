
 

import { Controller, 
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Param,
    Body,
    NotFoundException, 
  } from '@nestjs/common';
  
  import { productInput } from './dto/update.dto';
  
  export type Product = {
    id: number;
    title: string;
    description: string;
    price: string;
  };
  
  
  @Controller('products')
  export class AppController {
    products: Product[];
  
    constructor() {
      this.products = [
        {
            "id": 1,
            "title": "Night Cream",
            "description": "An all-in-one solution cream that repairs and soothes irritated, sensitized skin after breakouts. A rich gel-type cream absorbs instantly into the skin with a full of nourishment while leaving your skin feeling fresh and comfortable.",
            "price": "Rp250.000"
        }
      ]
    }
  
    //GET /products 
    @Get()
    findAll(){
      return this.products
    }
  
    //GET products/:id
    @Get(':id')
    findOne(@Param('id') id: number){
      const product = this.products.find((product) => product.id == id)
  
      if(!product){
        throw new NotFoundException(`Product with id: ${id} does not exist.`)
      }
  
      return product;
    }
  
  //POST /products
  @Post()
  create(@Body() input: productInput){
    const id = this.products[this.products.length - 1].id;

    const newProduct = {
      id: id + 1,
      title: input.title,
      description: input.description,
      price: input.price,
    };
  
    this.products.push(newProduct);
    return newProduct;
  }
  
  //DELETE products/:id
  @Delete(':id')
  remove(@Param('id') id: number){
    const items = this.products.findIndex((product) => product.id == id);
  
    if(items == -1){
      throw new NotFoundException(`Product with id: ${id} does not exist.`)
    }
  
    this.products.splice(items, 1);
  
    return {
      message: `Product with id: ${id} has been succesfully deleted.`
    }
  }
  
  //PUT products/:id
  @Put(':id')
  update(@Param('id') id: number, @Body() input: productInput){
   const items = this.products.findIndex((product) => product.id == id);
   if(items == -1){
    throw new NotFoundException(`Product with id: ${id} does not exist.`)
   }
  
   const product = this.products[items];
  
   this.products[items] = {
    id: product.id,
    title: input.title,
    description: input.description,
    price: input.price,
    };
    
    return this.products[items];
  
  }
  
  //PATCH products/:id
  @Patch(':id')
  patch(@Param('id') id: number, @Body() input: productInput){
    const items = this.products.findIndex((product) => product.id == id);
  
    if (items == -1){
      throw new NotFoundException(`Product with id: ${id} does not exist`);
    }
  
    const product = this.products[items];
  
    this.products[items] = {
      id: product.id, 
    title: input.title || product.title,
    description: input.description || product.description,
    price: input.price || product.price,
    };
      
    return this.products[items];
  
  }
  
  }