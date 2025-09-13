import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import 'primeicons/primeicons.css';
@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, ButtonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  showSideNavBar: boolean = true;
  open = true;

  enableSideBar() {
    if (this.showSideNavBar) {
      this.showSideNavBar = false;
    } else {
      this.showSideNavBar = true;
    }
  }
}
