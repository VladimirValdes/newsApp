import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public activateMenu = false;
  public menu: any[] = [
      {
        titulo: 'General',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Entertainment',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Business',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Health',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Science',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Sports',
        // icono: 'mdi mdi-gauge',
      },
      {
        titulo: 'Technology',
        // icono: 'mdi mdi-gauge',
      },
  ]

  constructor() { }


  showMenu() {
    this.activateMenu = !this.activateMenu;
  }


}
