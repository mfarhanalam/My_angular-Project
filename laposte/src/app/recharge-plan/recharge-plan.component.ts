import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge-plan',
  templateUrl: './recharge-plan.component.html',
  styleUrl: './recharge-plan.component.scss'
})
export class RechargePlanComponent {
  constructor(private router: Router) { }
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  user = {
    imgSrc: '', // Empty for no image
    name: 'Lionel Messi',
    number: '75893625210',
    plan: 'Jio Prepaid',
    location: 'Argentina'
  };

  // Generate initials from the name
  getInitials(name: string): string {
    const [firstName, lastName] = name.split(' ');
    const firstInitial = firstName ? firstName[0].toUpperCase() : '';
    const lastInitial = lastName ? lastName[0].toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  }
  // Generate unique background color for each name
  getBackgroundColor(name: string): string {
    const colors = ['#880ed4', '#f39c12', '#27ae60', '#3498db', '#9b59b6', '#e74c3c', '#1abc9c', '#2ecc71', '#34495e', '#d35400'];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  plans = [
    { price: 'CFA19', details: 'Base Plan · 1 GB'},
    { price: 'CFA555', details: '68 Days ·  + 2GB/day'},
    { price: 'CFA649', details: '80 Days ·  + 2GB/day'},
    { price: 'CFA265', details: '80 Days · 1GB'},
    { price: 'CFA1650', details: '365 Days ·  + 2GB/day'}
  ];

  searchTerm: string = ''; // Two-way data binding for search input

  // Getter to filter plans dynamically
  get filteredPlans() {
    return this.plans.filter((plan) =>
      plan.price.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      plan.details.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
