import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {

    this.configureData();
  }

  configureData = async () => {
    try {
      this.route.queryParams.subscribe(async param => {
        const input = param['msisdn'];
        if (!!input) {
          const finalurl = 'https://sl.bizmobia.com/slws/portal/zain/redirect?msisdn=' + input;
          window.location.href = finalurl;
        }
      });
    } catch (e) {
      window.location.href = '';
    }
  }
}
