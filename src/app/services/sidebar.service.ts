import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public activateMenu = false;
  public menu: any[] = [
      {
        titulo: 'General',
        icono: 'general',
      },
      {
        titulo: 'Entertainment',
        icono: 'entertainment',
      },
      {
        titulo: 'Business',
        icono: 'business',

      },
      {
        titulo: 'Health',
        icono: 'health',
      },
      {
        titulo: 'Science',
        icono: 'science',
      },
      {
        titulo: 'Sports',
        icono: 'sports',

      },
      {
        titulo: 'Technology',
        icono: 'tech',

      },
  ]

  constructor() { }


  showMenu() {
    this.activateMenu = !this.activateMenu;
  }


  


}
