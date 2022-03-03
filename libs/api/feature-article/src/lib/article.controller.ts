import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleService } from '@sample-angular-nest/api/data-access-article';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {

    constructor(
        private _articleService: ArticleService
    ) { }

    @Get()
    async getAllArticles() {
        return await this._articleService.getAll();
    }
}
