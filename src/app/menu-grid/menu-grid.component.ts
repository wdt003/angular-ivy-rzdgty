import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css'],
})
export class MenuGridComponent implements OnInit {
  menus: Menu[];

  constructor(private menuservice: MenuService) {
    this.menus = this.menuservice.getMenus();
  }

  ngOnInit() {}
}
