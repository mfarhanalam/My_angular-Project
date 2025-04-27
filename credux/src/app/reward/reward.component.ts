import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrl: './reward.component.scss'
})
export class RewardComponent implements OnInit {
  constructor(private router: Router) {}
  objects = [
    { symbol: '🍒', points: 10 },
    { symbol: '🍋', points: 5 },
    { symbol: '🍉', points: 15 },
    { symbol: '🍇', points: 20 },
    { symbol: '🍓', points: 25 }
  ];
  columns: any[][] = [[], [], []];
  totalPoints = 0;
  spinning = false;

  ngOnInit() {
    this.initializeColumns();
  }

  initializeColumns() {
    for (let i = 0; i < 3; i++) {
      this.columns[i] = this.getShuffledArray(this.objects);
    }
  }

  getShuffledArray(array: any[]) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  startSpinning() {
    if (this.spinning) return;

    this.spinning = true;
    this.totalPoints = 0;

    const spinDuration = 3000; // Spin for 2 seconds
    const spinInterval = 100; // Update every 100ms

    const spin = () => {
      if (!this.spinning) return;
      for (let i = 0; i < 3; i++) {
        this.columns[i].push(this.columns[i].shift());
      }
    };

    this.applySpinningClass(true);
    const interval = setInterval(spin, spinInterval);

    setTimeout(() => {
      clearInterval(interval);
      this.applySpinningClass(false);
      this.spinning = false;
      this.calculatePoints();
    }, spinDuration);
  }

  applySpinningClass(isSpinning: boolean) {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
      if (isSpinning) {
        column.classList.add('spinning');
      } else {
        column.classList.remove('spinning');
      }
    });
  }

  calculatePoints() {
    for (let i = 0; i < 3; i++) {
      const middleItem = this.columns[i][1];
      this.totalPoints += middleItem.points;
    }
  }

  isMiddleRow(rowIndex: number) {
    return rowIndex === 1;
  }





  backButton() {
    this.router.navigate(['/claimnow']);
  }

}
















