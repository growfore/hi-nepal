import { Test, TestingModule } from '@nestjs/testing';
import { SiteInformationsController } from './site-informations.controller';
import { SiteInformationsService } from './site-informations.service';

describe('SiteInformationsController', () => {
  let controller: SiteInformationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteInformationsController],
      providers: [SiteInformationsService],
    }).compile();

    controller = module.get<SiteInformationsController>(SiteInformationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
