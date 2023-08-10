import { Module } from '@nestjs/common';
import { AuthResolver } from 'src/resolvers/auth.resolver';
import { ServicesModule } from 'src/service/services.module';

@Module({
  imports: [ServicesModule],
})
export class AuthModule {}
