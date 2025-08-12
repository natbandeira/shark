import { PartialType } from '@nestjs/mapped-types';
import { CreateItemClassificadoDto } from './create-item-classificado.dto';

export class UpdateItemClassificadoDto extends PartialType(CreateItemClassificadoDto) {}
