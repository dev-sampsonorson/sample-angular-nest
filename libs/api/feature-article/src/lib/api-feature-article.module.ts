import { Module } from '@nestjs/common';
import { ApiDataAccessArticleModule } from '@sample-angular-nest/api/data-access-article';

import { ArticleController } from './article.controller';

@Module({
    imports: [
        ApiDataAccessArticleModule
    ],
    controllers: [
        ArticleController
    ],
    providers: [],
    exports: [],
})
export class ApiFeatureArticleModule {}
