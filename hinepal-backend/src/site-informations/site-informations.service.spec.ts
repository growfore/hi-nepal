import { Test, TestingModule } from '@nestjs/testing';
import { SiteInformationsService } from './site-informations.service';

describe('SiteInformationsService', () => {
  let service: SiteInformationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteInformationsService],
    }).compile();

    service = module.get<SiteInformationsService>(SiteInformationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
