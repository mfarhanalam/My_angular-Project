import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageList = [
    { image: '/assets/1.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
    { image: '/assets/2.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
    { image: '/assets/3.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
    { image: '/assets/4.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
    { image: '/assets/5.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
    { image: '/assets/6.jpg', header: 'Qui sommes-nous ?' ,paragraph: 'Un groupe dexperts et de professionnels talentueux travaillant pour faciliter la vie de nos populations'},
  ]
}
