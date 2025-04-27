import { Component , OnInit ,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigateByUrl('home');
    },4000)
  }
  constructor(private router:Router , private elementRef: ElementRef)  {

  }
  ngAfterViewInit() {
    const text = this.elementRef.nativeElement.querySelector('#logo');
    const letters = text.textContent.split('');

    text.textContent = '';

    const tl = gsap.timeline();

    letters.forEach((letter: string, index: number) => { // Explicitly defining types for letter and index
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';

      text.appendChild(span);

      tl.to(span, {
        opacity: 1,
        y: 10,
        ease: 'bounce.out',
        duration: 0.6,
        // delay: index * 0.2
      });

    });

  }



}
