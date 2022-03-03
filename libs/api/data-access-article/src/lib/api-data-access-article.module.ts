import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticleService } from '..';
import { ArticleSchema } from './article.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Article', schema: ArticleSchema }
        ])
    ],
    providers: [ArticleService],
    exports: [ArticleService],
})
export class ApiDataAccessArticleModule {}
