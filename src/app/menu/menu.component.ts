import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mfe-menu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy, OnInit {

  ngOnDestroy() {
    console.log("Menu OFF!");
  }

  ngOnInit() {
    console.log("Menu ON!");
  }

}
