import { Component, OnInit } from '@angular/core';
import {GameModel} from "./game.model";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  items: GameModel[] = [
    {
      id: 1,
      name: 'Запитання',
      route: 'knowledge'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
