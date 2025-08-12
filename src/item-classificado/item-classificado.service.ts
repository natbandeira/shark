import { Injectable } from '@nestjs/common';
import { CreateItemClassificadoDto } from './dto/create-item-classificado.dto';
import { UpdateItemClassificadoDto } from './dto/update-item-classificado.dto';

@Injectable()
export class ItemClassificadoService {
  create(createItemClassificadoDto: CreateItemClassificadoDto) {
    return 'This action adds a new itemClassificado';
  }

  findAll() {
    return `This action returns all itemClassificado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemClassificado`;
  }

  update(id: number, updateItemClassificadoDto: UpdateItemClassificadoDto) {
    return `This action updates a #${id} itemClassificado`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemClassificado`;
  }
}
