import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit {
  menus: Menu[];
  menu;

  constructor(private menuservice: MenuService, private route: ActivatedRoute) {
    this.menus = this.menuservice.getMenus();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      const id = +map.get('id');
      this.menu = this.menus[id];
    });
  }
}
