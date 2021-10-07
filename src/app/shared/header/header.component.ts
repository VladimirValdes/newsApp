import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor( public sidebarService: SidebarService,
               private router: Router) { }

  ngOnInit(): void {
  }

  searchNews( term: string ) {

    if ( term.length == 0 ) {
      console.log('Lo ejecute')
      this.router.navigateByUrl('/');
    } else  {

      this.router.navigateByUrl(`/search/${ term }`);
    }

  }


 

}
