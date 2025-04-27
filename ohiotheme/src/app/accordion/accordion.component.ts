import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  accordianData = [
    {
      question: 'Website & Mobile App Design',
      answer: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
    },
    {
      question: 'Motion Graphics & Animation',
      answer: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
    },
    {
      question: 'User Experience',
      answer: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
    }
     
     ];
     accordianData2 = [
      {
        question2: 'Website & Mobile App Design',
        answer2: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
      },
      {
        question2: 'Motion Graphics & Animation',
        answer2: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
      },
      {
        question2: 'User Experience',
        answer2: 'Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and feel the charm of existence in this spot, which was created for the bliss of souls.'
      },
    ];

  // Initialize an array to track which answers are open
  isOpenAns: boolean[] = [];

  // Initialize an array to track the icon state
  isPlusIcon: boolean[] = [];

  constructor() {
    this.isOpenAns = this.accordianData.map(() => false);
    this.isPlusIcon = this.accordianData.map(() => true); // Plus icons by default
  }

  // Function to toggle the answer for a specific question
  toggleAnswer(index: number) {
    if (this.isOpenAns[index]) {
      // If the clicked question is already open, close it
      this.isOpenAns[index] = false;
      this.isPlusIcon[index] = true; // Change to plus icon
    } else {
      // Close all answers
      this.isOpenAns = this.isOpenAns.map(() => false);
      this.isPlusIcon = this.isPlusIcon.map(() => true); // Change all to plus icons
      // Toggle the selected answer and change the icon to minus
      this.isOpenAns[index] = true;
      this.isPlusIcon[index] = false;
    }
  }
//  ======================accordianData end=========================

}