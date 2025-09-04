import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Contas, ContasSchema } from 'src/schemas/contas.schemas';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Contas.name, schema: ContasSchema }])],
  controllers: [ContasController, AuthController],
  providers: [ContasService, AuthService],
  exports: [ContasModule]
})
export class ContasModule {}
