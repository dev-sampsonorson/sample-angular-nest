import { Component } from '@angular/core';
import { ArticlesApiService } from '@sample-angular-nest/article/data-access-api';

@Component({
  selector: 'sample-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    articles$ = this._articleApiService.articleControllerGetAllArticles();
    constructor(
        private _articleApiService: ArticlesApiService
    ) { }
}
