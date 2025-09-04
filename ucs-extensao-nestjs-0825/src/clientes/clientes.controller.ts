import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly ClientesService: ClientesService) {}

  @Post()
  create(@Body() conta: any) {
    return this.ClientesService.create(conta);
  }

  @Get('all')
  findAll() {
    return this.ClientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ClientesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() conta: any) {
    return this.ClientesService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ClientesService.remove(id);
  }
}