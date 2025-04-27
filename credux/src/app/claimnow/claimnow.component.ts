import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimnow',
  templateUrl: './claimnow.component.html',
  styleUrl: './claimnow.component.scss'
})
export class ClaimnowComponent {

  constructor(private router: Router) {}

  showModal = false;


  showMessage() {
    this.showModal = true;
  }

  collectGift() {
    this.showModal = false;
    alert('Gift collected successfully!');
    this.router.navigate(['/reward']);
  }
  backButton() {
    this.router.navigate(['/']);
  }
}
