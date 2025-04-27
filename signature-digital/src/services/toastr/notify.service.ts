import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toastrService: ToastrService) { }
  toastMessage(message: string, type: string) {
    if (type === 'info') {
      this.toastrService.info(message, "", {
        timeOut: 2000,
        progressBar: true,
        tapToDismiss: true,
        positionClass: 'toast-top-right'
      })
    } else if(type === 'error') {
      this.toastrService.error(message, "", {
        timeOut: 2000,
        progressBar: true,
        tapToDismiss: true,
        positionClass: 'toast-top-right'
      })
    } 

  }
}
