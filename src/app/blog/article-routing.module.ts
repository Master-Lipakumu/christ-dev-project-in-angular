import { NgModule } from '@angular/core';

import { DetailArticleComponent } from './detail-article/detail-article.component';

import { ListArticleComponent } from './list-article/list-article.component';

import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { InfosComponent } from './infos/infos.component';

import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  {path: 'Article' , component : ListArticleComponent},

  {path: 'Article/:id', component : DetailArticleComponent},
  //lien de la page de contacte
  { path : 'contact', component : ContactComponent },
  // lien de la page d'information
  { path : 'infos', component: InfosComponent }

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
