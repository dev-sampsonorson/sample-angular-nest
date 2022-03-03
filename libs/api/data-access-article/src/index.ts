export * from './lib/api-data-access-article.module';
export * from './lib/article.service';
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
export * from './lib/article.model';
