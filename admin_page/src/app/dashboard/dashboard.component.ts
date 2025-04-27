import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, } from 'chart.js';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels,
  ApexTooltip, ApexStroke,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // ===================apex chart =====================-

  //radar area
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
      { data: [38, 78, 70, 99, 36, 57, 10], label: 'Series D' },
    ],
  };

  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  // line area 
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: "series2",
        data: [15, 11, 32, 18, 9, 24, 11],

      }
    ],
    chart: {
      height: 250,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
  };

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  // Doughnut end


   // PolarArea
   public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: [300, 500, 100, 40, 120],
        label: 'Series 1',
      },
    ],
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  // PolarArea end

  // ===================apex chart end =====================-


  // =====================Recent Activity=========================
  recentAct = [
    { minut: '32 min', icon: 'bi bi-circle-fill', text: 'Quia quae rerum ', txt: 'explicabo officiis', text1: ' beatae', iconcolor: '#198754' },
    { minut: '56 min', icon: 'bi bi-circle-fill', text: 'Voluptatem blanditiis blanditiis eveniet', iconcolor: '#dc3545' },
    { minut: '2 hrs', icon: 'bi bi-circle-fill', text: 'Voluptates corrupti molestias voluptatem', iconcolor: '#0d6efd' },
    { minut: '1 day', icon: 'bi bi-circle-fill', text: 'Tempore autem saepe ', txt: 'explicabo officiis', text1: ' tempore', iconcolor: '#0dcaf0' },
    { minut: '2 days', icon: 'bi bi-circle-fill', text: 'Est sit eum reiciendis exercitationem', iconcolor: '#ffc107' },
    { minut: '4 weeks', icon: 'bi bi-circle-fill', text: 'Dicta dolorem harum nulla eius. Ut quidem quidem sit quas', iconcolor: '#595c5f' },
  ]
  // =====================Recent Activity=========================

  // =================Recent Sales====================
  recent = [
    { num: '#2344', customer: 'Angus Grady', product: 'Ut voluptatem id earum et', price: '$67', status: 'Rejected', bgColor: '#dc3545' },
    { num: '#2630', customer: 'Ashleigh Langosh', product: 'At recusandae consectetur', price: '$147', status: 'Pending', bgColor: '#f0ad4e' },
    { num: '#2344', customer: 'Brandon Jacob', product: 'At praesentium minu', price: '$64', status: 'Rejected', bgColor: '#dc3545' },
    { num: '#2425', customer: 'Bridie Kessler', product: 'Blanditiis dolor omnis similique', price: '$47', status: 'Approved', bgColor: '#198754' },
    { num: '#2165', customer: 'Raheem Lehner', product: 'Ut voluptatem id earum et', price: '$67', status: 'Approved', bgColor: '#198754' },
  ]
  // =================Recent Sales====================
  // ====================Top selling product=================
  top = [
    { Preview: '/assets/img/product-1.jpg', Product: '	Ut inventore ipsa voluptas nulla', Price: '$67', Sold: '55', Revenue: '$5,828' },
    { Preview: '/assets/img/product-2.jpg', Product: 'Exercitationem similique doloremque', Price: '$147', Sold: '467', Revenue: '$5,828' },
    { Preview: '/assets/img/product-3.jpg', Product: '	Doloribus nisi exercitationem', Price: '$125', Sold: '265', Revenue: '$5,828' },
    { Preview: '/assets/img/product-4.jpg', Product: 'Officiis quaerat sint rerum error', Price: '$147', Sold: '277', Revenue: '$5,828' },
    { Preview: '/assets/img/product-5.jpg', Product: '	Sit unde debitis delectus repellendus', Price: '$52', Sold: '367', Revenue: '$5,828' },
  ]
  // ====================Top selling product=================


  // ===================Default================= 
  alertData = [ 
    { sIcon: 'star_border' , paragraph: ' A simple primary alert with icon—check it out!' , bgColor: '#cfe2ff' , border:'1px solid #9ec5fe'},
    { sIcon: 'calendar_view_day' , paragraph: ' A simple secondary alert with icon—check it out!' , bgColor: '#e2e3e5' , border:'1px solid #c4c8cb'},
    { sIcon: 'check_circle_outline' , paragraph: ' A simple success alert with icon—check it out!' , bgColor: '#d1e7dd' , border:'1px solid #a3cfbb'},
    { sIcon: 'new_releases' , paragraph: 'A simple danger alert with icon—check it out!' , bgColor: '#f8d7da' , border:'1px solid #f1aeb5'},
    { sIcon: 'warning' , paragraph: ' A simple warning alert with icon—check it out!' , bgColor: '#fff3cd' , border:'1px solid #fff3cd '},
    { sIcon: 'info' , paragraph: ' A simple info alert with icon—check it out!' , bgColor: '#cff4fc' , border:'1px solid #9eeaf9'},
    { sIcon: 'folder' , paragraph: ' A simple folder alert with icon—check it out!' , bgColor: '#ced4da' , border:'1px solid #adb5bd'},
    { sIcon: 'book' , paragraph: ' A simple book alert with icon—check it out!' , bgColor: 'rgb(126 130 134)' , border:'1px solid rgb(103 94 94)'},
  ]

  cancel(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  } 
  // ===================Default end================= 

}

