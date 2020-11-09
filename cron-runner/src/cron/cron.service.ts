import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {

  constructor(
    private readonly logger: Logger) { }
  
  @Cron(CronExpression.EVERY_5_SECONDS)
  async runCron(): Promise<void> {
    this.logger.debug('Running cron job...');
  }
}
