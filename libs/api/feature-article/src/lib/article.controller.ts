import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '@sample-angular-nest/api/data-access-article';


@Controller('articles')
export class ArticleController {

    constructor(
        private _articleService: ArticleService
    ) { }

    @Get()
    async getAllArticles() {
        return await this._articleService.getAll();
    }
}
