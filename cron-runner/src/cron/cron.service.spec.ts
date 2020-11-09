import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CronService } from './cron.service';

describe('CronService', () => {
  let service: CronService;
  let logger: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CronService,
        Logger],
    }).compile();

    service = module.get<CronService>(CronService);
    logger = module.get<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('CronService.runCron should call logger.debug', () => {
    const loggerDebug = jest.spyOn(logger, 'debug');
    service.runCron();
    expect(loggerDebug).toBeCalled();
  });
});
