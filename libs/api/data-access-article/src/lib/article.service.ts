import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDto } from '@sample-angular-nest/api/data-access-dto';
import { Model } from 'mongoose';

import { Article } from './article.model';

@Injectable()
export class ArticleService {
    constructor(
        // This is the moogose model
        // It has a constructable function and you can pass in a partial of the article model
        @InjectModel(Article.name) private _articleModel: Model<Article>,
    ) { }

    async getAll() {
        return await this._articleModel.find().exec();
    }

    async createArticle(dto: CreateArticleDto) {
        // the moogose schema validation will kick in
        // will have id, createdAt, ...
        const article = new this._articleModel(dto);

        // it works this way because you might need the article id
        // to do something else before you commit it to the database

        // this is what puts it in the database
        return await this._articleModel.create(article);
    }
}
