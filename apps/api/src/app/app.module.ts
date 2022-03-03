import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiFeatureArticleModule } from '@sample-angular-nest/api/feature-article';
import { ApiFeatureConfigModule } from '@sample-angular-nest/api/feature-config';
import { MongoConfiguration, mongoConfiguration } from '@sample-angular-nest/api/utils-config';

@Module({
    imports: [
        ApiFeatureConfigModule,
        ApiFeatureArticleModule,
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
