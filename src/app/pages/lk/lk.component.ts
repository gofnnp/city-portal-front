import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit {
  currentPage: number = 1;

  public menuItems: any = [
    {
      code: 1,
      field: 'Добавить заявку'
    },
    {
      code: 2,
      field: 'Отправленные заявки'
    },
    {
      code: 3,
      field: 'Выйти'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    console.log('logout'); 
  }

  findMenuItem(code: number) {
    return this.menuItems.find((item: any) => item.code === code)
  }

  changePage(pageCode: number) {
    if (pageCode === 3) {
      this.logout()
      return
    }
    this.currentPage = pageCode
  }

}
