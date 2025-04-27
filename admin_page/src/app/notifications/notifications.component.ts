import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{
  constructor() { }

  
  ngOnInit(): void {
   
  }


  cancel(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  } 

  alertData = [
    { sIcon: 'star_border' , paragraph: ' A simple primary alert with icon—check it out!' , data:'#052c65', bgColor: '#cfe2ff' , border:'1px solid #9ec5fe'},
    { sIcon: 'calendar_view_day' , paragraph: ' A simple secondary alert with icon—check it out!' , data:'#2b2f38', bgColor: '#e2e3e5' , border:'1px solid #c4c8cb'},
    { sIcon: 'check_circle_outline' , paragraph: ' A simple success alert with icon—check it out!' , data:'#0a3622', bgColor: '#d1e7dd' , border:'1px solid #a3cfbb'},
    { sIcon: 'new_releases' , paragraph: 'A simple danger alert with icon—check it out!' ,data:'rgb(88 21 28)', bgColor: '#f8d7da' , border:'1px solid #f1aeb5'},
    { sIcon: 'warning' , paragraph: ' A simple warning alert with icon—check it out!' , data:'rgb(102 77 3)', bgColor: '#fff3cd' , border:'1px solid #fff3cd '},
    { sIcon: 'info' , paragraph: ' A simple info alert with icon—check it out!' , data:'#055160', bgColor: '#cff4fc' , border:'1px solid #9eeaf9'},
    { sIcon: 'folder' , paragraph: ' A simple folder alert with icon—check it out!' , data:'#495074', bgColor: '#ced4da' , border:'1px solid #adb5bd'},
    { sIcon: 'book' , paragraph: ' A simple book alert with icon—check it out!' , data:'#3d3d3d', bgColor: 'rgb(126 130 134)' , border:'1px solid rgb(103 94 94)'},
  ]

  cancel2(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  } 
  alert2Data = [
    { bgColor: '#cfe2ff' , border: '1px solid #9ec5fe', heading: 'Primary Heading' , textColor: '#052c65' , paragraph: 'Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.' , paragraph2: ' Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'},
    { bgColor: '#e2e3e5' , border: '1px solid #c4c8cb', heading: 'Secondary Heading' , textColor: '#2b2f38' , paragraph: 'Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.' , paragraph2: ' Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'},
    { bgColor: '#d1e7dd' , border:'1px solid #a3cfbb', heading: 'Success Heading' , textColor: '#0a3622' , paragraph: 'Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.' , paragraph2: ' Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'},
    { bgColor: '#f8d7da' , border:'1px solid #f1aeb5', heading: 'Danger Heading' , textColor: 'rgb(88 21 28)' , paragraph: 'Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.' , paragraph2: ' Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'},
    { bgColor: '#fff3cd' , border:'1px solid #fff3cd ', heading: 'Danger Heading' , textColor: 'rgb(102 77 3)' , paragraph: 'Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.' , paragraph2: ' Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'},
  ]


  // ====================Default Accordion===============
  items = [
    { title: 'Accordion Item #1', content: 'This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow', open: false },
    { title: 'Accordion Item #2', content: 'This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow', open: false },
    { title: 'Accordion Item #3', content: 'This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow', open: false }
  ];

  
  toggleAccordion(item: any) {
    item.open = !item.open;
  }
  // ====================Default Accordion===============
  

}
