import { Module } from '@nestjs/common';
import { AppController } from './products.controller';

@Module({
    controllers: [AppController],
    providers: [],
})
export class ProductsModule {}
