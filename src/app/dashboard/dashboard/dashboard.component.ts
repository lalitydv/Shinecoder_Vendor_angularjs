import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @HostBinding('class') class = 'wrapper';
  public sidebarMenuOpened = true;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.removeClass(document.querySelector('body'), 'login-page');
    this.renderer.removeClass(document.querySelector('body'), 'register-page');
  }


  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(document.querySelector('body'), 'sidebar-open');
      this.renderer.addClass(document.querySelector('body'), 'sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(document.querySelector('body'), 'sidebar-collapse');
      this.renderer.addClass(document.querySelector('body'), 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }


}
