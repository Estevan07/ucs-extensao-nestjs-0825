import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
  constructor(
  ) {}

  create(conta: any)  {
    return { message: 'Conta recebida com sucesso', dados: conta };
  }
  findAll()  {}

  findOne(id: number)  {}

  async update(id: number, conta: any)  {}

  async remove(id: number)  {}
}
