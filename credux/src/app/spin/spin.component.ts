import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap, Elastic, Sine } from 'gsap';


@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})

export class SpinComponent implements OnInit {

    @ViewChild('list1', { static: true }) list1!: ElementRef;
    @ViewChild('list2', { static: true }) list2!: ElementRef;
    @ViewChild('list3', { static: true }) list3!: ElementRef;
    @ViewChild('slotTrigger', { static: true }) slotTrigger!: ElementRef;
    @ViewChild('head', { static: true }) head!: ElementRef;
    @ViewChild('stick', { static: true }) stick!: ElementRef;
    @ViewChild('hole', { static: true }) hole!: ElementRef;

    liHeight: number = 0;

    ngOnInit() {
      this.liHeight = this.getLiHeight();
      this.slotTrigger.nativeElement.addEventListener('click', () => {
        this.slotTriggerMove();
        this.spin();
      });
    }

    getLiHeight(): number {
      const li = document.querySelector('li');
      return li ? li.clientHeight : 0;
    }

    spin() {
      const r1 = this.getRandomInt(3, 8);
      const r2 = this.getRandomInt(1, 6);
      const r3 = this.getRandomInt(1, 6);

      gsap.to(this.list1.nativeElement, {
        duration: 1.3,
        y: -(this.liHeight * r1),
        ease: Elastic.easeInOut.config(6, 0)
      });
      gsap.to(this.list2.nativeElement, {
        duration: 1.3,
        y: -(this.liHeight * r2),
        ease: Elastic.easeInOut.config(6, 0),
        delay: 0.1
      });
      gsap.to(this.list3.nativeElement, {
        duration: 1.3,
        y: -(this.liHeight * r3),
        ease: Elastic.easeInOut.config(6, 0),
        delay: 0.2
      });

      console.log(r1, r2, r3, this.liHeight);
    }

    slotTriggerMove() {
      gsap.set([this.head.nativeElement, this.stick.nativeElement, this.hole.nativeElement], { y: 0, scale: 1 });
      gsap.to(this.head.nativeElement, {
        duration: 0.4,
        y: 70,
        repeat: 1,
        yoyo: true,
        ease: Sine.easeIn
      });
      gsap.to(this.stick.nativeElement, {
        duration: 0.4,
        y: 14,
        scaleY: 0.3,
        transformOrigin: '50% 100%',
        repeat: 1,
        yoyo: true,
        ease: Sine.easeIn
      });
      gsap.to(this.hole.nativeElement, {
        duration: 0.4,
        y: 10,
        scaleY: 2,
        repeat: 1,
        yoyo: true,
        ease: Sine.easeIn
      });
    }

    getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min) + min);
    }
}



















//   objects = [
//     { symbol: '🍒', points: 10 },
//     { symbol: '🍋', points: 5 },
//     { symbol: '🍉', points: 15 },
//     { symbol: '🍇', points: 20 },
//     { symbol: '🍓', points: 25 }
//   ];
//   columns: any[][] = [[], [], []];
//   totalPoints = 0;
//   spinning = false;
//   showModal = false;

//   ngOnInit() {
//     this.initializeColumns();
//   }

//   initializeColumns() {
//     for (let i = 0; i < 3; i++) {
//       this.columns[i] = this.getShuffledArray([...this.objects, ...this.objects, ...this.objects]);
//     }
//   }

//   getShuffledArray(array: any[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

//   startSpinning() {
//     if (this.spinning) return;

//     this.spinning = true;
//     this.totalPoints = 0;
//     this.showModal = false;

//     const spinDuration = 2000; // Spin for 2 seconds
//     const spinInterval = 100; // Update every 100ms

//     const spin = () => {
//       for (let i = 0; i < 3; i++) {
//         const firstItem = this.columns[i].shift();
//         this.columns[i].push(firstItem);
//       }
//     };

//     const interval = setInterval(spin, spinInterval);

//     setTimeout(() => {
//       clearInterval(interval);
//       this.spinning = false;
//       this.calculatePoints();
//       this.showModal = true;
//     }, spinDuration);
//   }

//   calculatePoints() {
//     const middleIndex = Math.floor(this.columns[0].length / 2);
//     for (let i = 0; i < 3; i++) {
//       const middleItem = this.columns[i][middleIndex];
//       this.totalPoints += middleItem.points;
//     }
//   }

//   isMiddleRow(rowIndex: number) {
//     return rowIndex === Math.floor(this.columns[0].length / 2);
//   }

//   reloadPage() {
//     window.location.reload();
//   }
// }






































