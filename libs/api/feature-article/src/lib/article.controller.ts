import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Article, ArticleService } from '@sample-angular-nest/api/data-access-article';
import { CreateArticleDto } from '@sample-angular-nest/api/data-access-dto';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {

    constructor(
        private _articleService: ArticleService
    ) { }

    @ApiOkResponse({
        /**
     * In real world project, you will not want to expose
     * the model/schema as the public api of the data access layer
     * because the model/schema is the contract between your application
     * and the database. You want you service to manage that, nothing else.
     *
     * Normally, you will have an ArticleDto and a transformation layer in
     * between. Which will be responsible for transforming your Article (model/schema)
     * to ArticleDto.
     */
        type: Article,
        isArray: true
    })
    @Get()
    async getAllArticles() {
        return await this._articleService.getAll();
    }

    @Post()
    @ApiCreatedResponse({
        type: Article
    })
    async createArticle(@Body() dto: CreateArticleDto) {
        return await this._articleService.createArticle(dto);
    }
}
