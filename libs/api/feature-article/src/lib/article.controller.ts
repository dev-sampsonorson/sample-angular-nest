import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleService } from '@sample-angular-nest/api/data-access-article';
import { CreateArticleDto } from '@sample-angular-nest/api/data-access-dto';

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

    @Post()
    async createArticle(@Body() dto: CreateArticleDto) {
        return await this._articleService.createArticle(dto);
    }
}
