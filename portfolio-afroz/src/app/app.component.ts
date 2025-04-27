import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
  constructor() { }
  activeSection: string | null = 'hero';

  sectionIds: string[] = ['hero', 'about', 'resume', 'portfolio', 'service', 'contact'];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.setActiveSection();
  }

  scrollToElement(sectionId: string, event: Event) {
    event.preventDefault(); // Prevent default link behavior (e.g., jumping to the section)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeSection = sectionId;
  }

  setActiveSection() {
    const scrollPosition = window.scrollY;
    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  // ================================Portfolio Section =====================================
  //   isShowTab:string='';
  //  tab(name:string){
  //   this.isShowTab='';
  //  }

  activeTab: string = 'all';

  tab(name: string) {
    this.activeTab = name;
  }
  // ================================Portfolio Section end=====================================



  slides = [
    { paragraph: 'One of the most successful investors of all time. Known for value investing and long-term approach.Chairman and CEO of Berkshire Hathaway. Renowned for his wealth and philanthropy.', img: '/assets/image/warrenbuffett.webp', name: 'Warren Buffett', post: '' },
    { paragraph: ' Legendary hedge fund manager and philanthropist.Known for "breaking the Bank of England" by shorting the British pound.Famous for his reflexivity theory and global macroeconomic approach.', img: '/assets/image/georgeSoros.webp', name: 'George Soros', post: '' },
    { paragraph: 'Founder of Bridgewater Associates, one of the world`s largest hedge funds.Pioneer of risk parity investing and algorithmic trading strategies.Committed to philanthropic initiatives focused on education and economic empowerment.', img: '/assets/image/raydalio.webp', name: 'Ray Dalio', post: '' },
    { paragraph: 'Founded Tudor Investment Corporation, known for its macro trading strategies.Predicted the 1987 stock market crash and profited from it.Signatory of the Giving Pledge, committing to donate the majority of his wealth to philanthropy.', img: '/assets/image/Paultudor.jpg', name: 'Paul Tudor Jones II', post: '' },
    { paragraph: 'Forex trader, author, and renowned currency analyst.Co-founder of BKForex LLC and author of several bestselling books on forex trading.Specializes in forex market analysis, trading strategies, and global macroeconomics.', img: '/assets/image/Kathylien.jpg', name: 'Kathy Lien', post: '' },


  ];
  slideConfig = {
    slidesToShow: 3, slidesToScroll: 1, 'autoplay': true,
    arrows: false,
    dots: true
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
