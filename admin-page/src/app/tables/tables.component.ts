import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  // ====================Default Table product=================
  table = [
    {  No: '1', Name: 'Brandon Jacob', Position: 'Designer', Age: '28' , Date: '2016-05-25' },
    {  No: '2', Name: 'Bridie Kessler', Position: 'Developer', Age: '48' , Date: '2011-09-05' },
    {  No: '3', Name: 'Ashleigh Langosh', Position: 'Finance', Age: '47' , Date: '2009-06-30' },
    {  No: '4', Name: 'Angus Grady', Position: 'Hr', Age: '51' , Date: '2012-06-11' },
    {  No: '5', Name: 'Raheem Lehner', Position: 'Dynamic Division Officer	', Age: '47' , Date: '2011-04-19' },
    
  ]
  // ====================Default Table=================

}
