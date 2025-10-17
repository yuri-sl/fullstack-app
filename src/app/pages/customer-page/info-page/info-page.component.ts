import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-info-page',
  imports: [ButtonModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss'
})
export class InfoPageComponent {
  isEditing : boolean = false;

  enableEdit(){
    this.isEditing = !this.isEditing;
  }

}
