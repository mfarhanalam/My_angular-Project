import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('progressAnimation', [
      state('0', style({ width: '0%' })),  // State for progress bar at 0% width.
      state('75', style({ width: '75%' })),  // State for progress bar at 75% width.
      transition('* => *', animate('1s')),  // Transitions between any states with a 1-second duration.
    ]),  // Added comma here for separating triggers

    trigger('searchState', [
      state('open', style({
        display: 'block',
        opacity: 1,
      })),  // State for the search bar being open.
      state('closed', style({
        display: 'none',
        opacity: 0,
      })),  // State for the search bar being closed.
      transition('open <=> closed', animate('300ms ease-in-out')),  // Toggle between open and closed with animation.
    ]),
  ]

})
export class TestComponent implements OnInit {
  activeTab: string = 'Sign'; // Initialize a property to track the active tab, default is 'Sign'

  // Implement the ngOnInit lifecycle hook method
  ngOnInit(): void {
    // Initialize the active tab to 'Sign' when the component loads
    this.showContent('Sign');
    this.animateProgressBar()
    this.toggleImageSize(0);

  }

  // Define a method to set the active tab
  showContent(tabName: string) {
    this.activeTab = tabName;
  }

  // model
  private formModal!: Modal;
  openFormModal() {
    const modalElement = document.getElementById('form_modal') as any;
    this.formModal = new Modal(modalElement);
    this.formModal.show();
  }
  closeFormModel() {
    this.formModal.hide();
  }



  progressWidth: number = 0;

  animateProgressBar() {
    this.progressWidth = 75; // Set the target progress (75%)
  }


  images = [
    { img: 'assets/slick/photo-1.avif', text: 'Explore The World' },
    { img: 'assets/slick/photo-2.avif', text: 'Wild Forest' },
    { img: 'assets/slick/photo-3.avif', text: 'Sunny Beach' },
    { img: 'assets/slick/photo-4.avif', text: 'City On Winter' },
    { img: 'assets/slick/photo-5.avif', text: 'Mountains-Clouds' }
  ]


  selectedImageIndex: number | null = null;

  toggleImageSize(index: number) {
    if (this.selectedImageIndex === index) {
      this.selectedImageIndex = null; // Deselect the image if it's already selected
    } else {
      this.selectedImageIndex = index; // Select the clicked image
    }
  }





  searchState = 'closed';

  toggleSearch() {
    this.searchState = this.searchState === 'closed' ? 'open' : 'closed';
  }

  closeSearch() {
    this.searchState = 'closed';
  }


}










