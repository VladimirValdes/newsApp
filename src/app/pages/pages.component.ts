import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: [
    './pages.component.scss'
  ]
})
export class PagesComponent implements OnInit {


  constructor( public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
