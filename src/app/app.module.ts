import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { KnowledgeGameComponent } from './knowledge-game/knowledge-game.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    KnowledgeGameComponent,
    MenuItemsComponent,
    MenuItemComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
