import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@sample-angular-nest/api/feature-config';

@Module({
  imports: [ApiFeatureConfigModule],
  controllers: [],
})
export class AppModule {}
