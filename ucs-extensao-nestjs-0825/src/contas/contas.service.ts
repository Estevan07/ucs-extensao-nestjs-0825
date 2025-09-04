import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contas } from 'src/schemas/contas.schemas';
import { Model } from 'mongoose';
import { CreateContasDto } from './dto/create-contas.dto'
import { UpdateContasDto } from './dto/update-contas.dto'

@Injectable()
export class ContasService {

  constructor(@InjectModel(Contas.name) private ContasModel: Model<Contas>) {}
  
  create(conta: CreateContasDto)  {
    const createdContas = new this.ContasModel(conta);
    return createdContas.save();
  }

  findAll()  {
    return this.ContasModel.find().exec();
  }

  findOne(ContasNumber: number)  {
    return this.ContasModel.findOne({ number: ContasNumber }).exec();
  }

  async update(ContasNumber: number, account: UpdateContasDto)  {
    const ContasResult = await this.ContasModel.findOneAndUpdate({ number: ContasNumber }, Contas).exec();
    return ContasResult
  }
  
  async remove(ContasNumber: number)  {
    const conta = await this.ContasModel.findOneAndDelete({ number: ContasNumber }).exec();
    return conta
  }
}