import { Test, TestingModule } from '@nestjs/testing';
import { ItemClassificadoController } from '../item-classificado.controller';
import { ItemClassificadoService } from '../item-classificado.service';

describe('ItemClassificadoController', () => {
  let controller: ItemClassificadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemClassificadoController],
      providers: [ItemClassificadoService],
    }).compile();

    controller = module.get<ItemClassificadoController>(ItemClassificadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
