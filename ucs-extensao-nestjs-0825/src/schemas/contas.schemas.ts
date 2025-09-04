import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

 @Schema({ collection: 'Contas' })
 export class Contas {
   @Prop({ required: true })
   number: number;
   @Prop({ required: true })
   holder: string;
   @Prop({ required: true })
   balance: number;
   @Prop({ required: true })
   limit: number;
 }
 export const ContasSchema = SchemaFactory.createForClass(Contas)
