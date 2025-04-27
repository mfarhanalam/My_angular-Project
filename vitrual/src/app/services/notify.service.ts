import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snotifyService: ToastrService) { }

  // this.toastrService.error('everything is broken', 'Major Error', {
  //   timeOut: 2000,
  // });

  toastMessage(message: string, type: string) {
    if (type === 'success') {
      this.successMessage(message);
    } else if (type === 'warning') {
      this.warningMessage(message);
    } else if (type === 'error') {
      this.errorMessage(message);
    } else if (type === 'info') {
      this.infoMessage(message);
    }
  }
  successMessage(message: any) {
    this.snotifyService.success(message, "", {
      timeOut: 2000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right'
    });
  }

  showMessage(title: string, message: string, type: string) {
    if (type === 'warning') {
      this.snotifyService.warning(message, "", {
        timeOut: 2000,
        progressBar: true,
        tapToDismiss: true,
        positionClass: 'toast-top-right'
      });
    } else if (type === 'success') {
      this.snotifyService.success(message, "", {
        timeOut: 2000,
        progressBar: true,
        tapToDismiss: true,
        positionClass: 'toast-top-right'
      });
    }
  }

  infoMessage(message: any) {
    this.snotifyService.info(message, "", {
      timeOut: 2000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right',
      
    });
  }

  errorMessage(message: any) {
    this.snotifyService.error(message, "", {
      timeOut: 2000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right'
    });
  }

  warningMessage(message: any) {
    this.snotifyService.warning(message, "", {
      timeOut: 2000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right'
    });
  }
}

