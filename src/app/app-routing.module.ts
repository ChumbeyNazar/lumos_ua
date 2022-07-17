import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KnowledgeGameComponent} from "./knowledge-game/knowledge-game.component";
import {BrowserModule} from "@angular/platform-browser";
import {MainMenuComponent} from "./main-menu/main-menu.component";

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'knowledge', component: KnowledgeGameComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
