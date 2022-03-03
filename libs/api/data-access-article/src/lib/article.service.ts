import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Article } from './article.model';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name) private _articleModel: Model<Article>,
    ) { }

    async getAll() {
        return await this._articleModel.find().exec();
    }
}
