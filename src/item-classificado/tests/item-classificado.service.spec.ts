import { Test, TestingModule } from '@nestjs/testing';
import { ItemClassificadoService } from './item-classificado.service';

describe('ItemClassificadoService', () => {
  let service: ItemClassificadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemClassificadoService],
    }).compile();

    service = module.get<ItemClassificadoService>(ItemClassificadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
