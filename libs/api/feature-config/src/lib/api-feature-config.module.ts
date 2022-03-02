import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration } from '@sample-angular-nest/api/utils-config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [
      appConfiguration
    ]
  })]
})
export class ApiFeatureConfigModule {}
