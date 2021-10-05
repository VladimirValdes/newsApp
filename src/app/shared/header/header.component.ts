import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {

  activeSearch = false;
  constructor( public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  searchNews() {
    // this.activeSearch = true;
  }


 

}
