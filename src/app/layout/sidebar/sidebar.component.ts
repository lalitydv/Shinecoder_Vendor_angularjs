import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  adminName= "Super Admin";
  pic_url= 'assets/img/avatar.png' as any;


  constructor() { }

  userData!: any

  ngOnInit(): void {
  }

  Signout() {
  }



}
