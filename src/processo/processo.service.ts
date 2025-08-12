import { Injectable } from '@nestjs/common';
import { CreateProcessoDto } from './dto/create-processo.dto';
import { UpdateProcessoDto } from './dto/update-processo.dto';

@Injectable()
export class ProcessoService {
  create(createProcessoDto: CreateProcessoDto) {
    return 'This action adds a new processo';
  }

  findAll() {
    return `This action returns all processo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} processo`;
  }

  update(id: number, updateProcessoDto: UpdateProcessoDto) {
    return `This action updates a #${id} processo`;
  }

  remove(id: number) {
    return `This action removes a #${id} processo`;
  }
}
