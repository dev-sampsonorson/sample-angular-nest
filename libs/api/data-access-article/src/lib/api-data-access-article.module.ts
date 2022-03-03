import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticleSchema } from './article.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Article', schema: ArticleSchema }
        ])
    ],
    providers: [],
    exports: [],
})
export class ApiDataAccessArticleModule {}
