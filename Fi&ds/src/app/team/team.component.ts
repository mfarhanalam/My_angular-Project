import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  teamList = [
    { img: 'assets/team/1.JPEG', name: 'Md Farhan Alam', status: 'Founder & CEO', linkedLin: 'linkedin.com/in/md-farhan-alam-97a174237', instagram: 'linkedin.com/in/md-farhan-alam-97a174237', facebook: 'linkedin.com/in/md-farhan-alam-97a174237', twitter: 'linkedin.com/in/md-farhan-alam-97a174237' },
    { img: 'assets/team/2.JPEG', name: 'Imran Nazeer', status: 'Director - Sales & Commercial', linkedLin: 'linkedin.com/in/danish-jamil-408752281', instagram: 'linkedin.com/in/md-farhan-alam-97a174237', facebook: 'linkedin.com/in/md-farhan-alam-97a174237', twitter: 'linkedin.com/in/md-farhan-alam-97a174237' },
    { img: 'assets/team/3.JPEG', name: 'Danish Ahamd', status: 'Co-Founder & CTO', linkedLin: 'linkedin.com/in/md-imran-nazeer-2b6004258', instagram: 'linkedin.com/in/md-farhan-alam-97a174237', facebook: 'linkedin.com/in/md-farhan-alam-97a174237', twitter: 'linkedin.com/in/md-farhan-alam-97a174237',resize:'cover' },
    { img: 'assets/team/4.JPEG', name: 'Mohammad Sarfraz Alam', status: 'Co-Founder & COO', linkedLin: 'linkedin.com/in/mohammad-sarfaraz-979633271', instagram: 'linkedin.com/in/md-farhan-alam-97a174237', facebook: 'linkedin.com/in/md-farhan-alam-97a174237', twitter: 'linkedin.com/in/md-farhan-alam-97a174237' },
    { img: 'assets/team/5.jpg', name: 'Dilshad Ahmad', status: ' Managing Director', linkedLin: 'linkedin.com/in/mohammad-sarfaraz-979633271', instagram: 'linkedin.com/in/md-farhan-alam-97a174237', facebook: 'linkedin.com/in/md-farhan-alam-97a174237', twitter: 'linkedin.com/in/md-farhan-alam-97a174237' },
  ]
}
