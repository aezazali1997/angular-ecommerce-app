import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  @Output() public sideNavToggle = new EventEmitter();
  ngOnInit(): void {}
  public onToggleSideNav = () => {
    alert();
    console.log('ruuned');
    this.sideNavToggle.emit();
  };
}
