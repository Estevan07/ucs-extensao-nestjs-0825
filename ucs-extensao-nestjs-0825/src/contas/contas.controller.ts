import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContasDto } from './dto/create-contas.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('contas')
@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  @ApiBody({ type: CreateContasDto })
  @ApiBearerAuth('access-token')
  create(@Body() contasDto: CreateContasDto) {
    return this.contasService.create(contasDto);
  }
  @Get()
  findAll() {
    return this.contasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() conta: any) {
    return this.contasService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contasService.remove(id);
  }
}
