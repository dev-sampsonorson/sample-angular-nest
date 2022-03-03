import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticleSchema } from './article.model';
import { ArticleService } from './article.service';

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
