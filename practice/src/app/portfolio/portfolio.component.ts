import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
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
    { paragraph: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.Accusantium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam,risus at semper.', img: 'assets/image/testimonials-1.jpg', name: 'Saul Goodman', post: 'Ceo Founder' },
    { paragraph: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure ametlegam anim culpa.', img: 'assets/image/testimonials-2.jpg', name: 'Sara Wilsson', post: 'Designer' },
    { paragraph: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.', img: 'assets/image/testimonials-3.jpg', name: 'Jena Karlis', post: 'Store Owner' },
    { paragraph: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore ', img: 'assets/image/testimonials-4.jpg', name: 'Matt Brandon', post: 'Freelancer' },
    { paragraph: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster iam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', img: 'assets/image/testimonials-5.jpg', name: 'John Larson', post: 'Entrepreneur' },


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

