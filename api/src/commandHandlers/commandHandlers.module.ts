import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/service/services.module';

@Module({
  imports: [ServicesModule],
})
export class CommandHandlersModule {}
