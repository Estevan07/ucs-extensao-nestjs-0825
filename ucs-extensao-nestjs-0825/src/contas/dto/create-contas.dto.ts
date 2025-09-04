import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateContasSchema = z.object({
  number: z.number().int().positive(),
  holder: z.string().min(1, 'O titular é obrigatório'),
  balance: z.number().nonnegative(),
  limit: z.number().nonnegative(),
});

export class CreateContasDto extends createZodDto(CreateContasSchema) {}
