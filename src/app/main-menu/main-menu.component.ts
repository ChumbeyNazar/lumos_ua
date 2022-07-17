import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  authorGames: string = '';
  currentYear: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.authorGames = 'Nazar Chumbey';
    this.currentYear = new Date().getFullYear();
  }

}
