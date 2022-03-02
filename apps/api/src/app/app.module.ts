import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@sample-angular-nest/api/feature-config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfiguration, mongoConfiguration } from '@sample-angular-nest/api/utils-config';

@Module({
  imports: [
    ApiFeatureConfigModule,
    MongooseModule.forRootAsync({
      inject: [
        mongoConfiguration.KEY
      ],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName
        }
      }
    })
  ],
  controllers: [],
})
export class AppModule {}
