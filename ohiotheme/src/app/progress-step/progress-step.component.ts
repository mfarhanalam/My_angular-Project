import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ProgressStep } from 'src/progress-step.model';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
  styleUrls: ['./progress-step.component.scss']
})
export class ProgressStepComponent implements OnInit {
  progress!: HTMLElement;
  prev!: HTMLButtonElement;
  next!: HTMLButtonElement;
  circles!: NodeListOf<HTMLElement>;
  currentActive = 1;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Initialize DOM elements
    this.progress = this.el.nativeElement.querySelector('#progress');
    this.prev = this.el.nativeElement.querySelector('#prev') as HTMLButtonElement;
    this.next = this.el.nativeElement.querySelector('#next') as HTMLButtonElement;
    this.circles = this.el.nativeElement.querySelectorAll('.circle');

    // Add click event listeners
    this.next.addEventListener('click', this.nextStep.bind(this));
    this.prev.addEventListener('click', this.prevStep.bind(this));

    // Initial update
    this.update();
    this.startAutoIncrement();
  }

  nextStep(): void {
    this.currentActive++;

    if (this.currentActive > this.circles.length) {
      this.currentActive = this.circles.length;
    }

    this.update();
  }

  prevStep(): void {
    this.currentActive--;

    if (this.currentActive < 1) {
      this.currentActive = 1;
    }

    this.update();
  }

  update(): void {
    this.circles.forEach((circle, idx) => {
      if (idx < this.currentActive) {
        this.renderer.addClass(circle, 'active');
      } else {
        this.renderer.removeClass(circle, 'active');
      }
    });

    const actives = this.el.nativeElement.querySelectorAll('.active');

    this.progress.style.width = `${((actives.length - 1) / (this.circles.length - 1)) * 100}%`;

    this.prev.disabled = this.currentActive === 1;
    this.next.disabled = this.currentActive === this.circles.length;
  }
  isLiked = false;

  onImageDoubleClick(): void {
    // Toggle the like status
    this.isLiked = !this.isLiked;
  }

  counterValue: number = 0;  // Initial value
  targetValue: number = 145;  // Destinition value
  incrementAmount: number = 4;  // How much number of amount you want to increase per second
  incrementInterval = 100; // in milliseconds
  startAutoIncrement() {
    const intervalId = setInterval(() => {
      if (this.counterValue < this.targetValue) {
        this.counterValue += this.incrementAmount;
        if (this.counterValue >= this.targetValue) {
          this.counterValue = this.targetValue;
          clearInterval(intervalId);
        }
      } else {
        clearInterval(intervalId);
      }
    }, this.incrementInterval);
  }
}
