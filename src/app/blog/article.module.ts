import { NgModule } from '@angular/core';

//import { CommonModule } from '@angular/common';

import { DetailArticleComponent } from './detail-article/detail-article.component';

import { ListArticleComponent } from './list-article/list-article.component';

import { ArticleRoutingModule } from './article-routing.module';

import { InfosComponent } from './infos/infos.component';

import { ContactComponent } from './contact/contact.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormationData } from './shared/api/formations.data';


import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    DetailArticleComponent,
    ListArticleComponent,
    ContactComponent,
    InfosComponent,

  ],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forFeature(FormationData),
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
