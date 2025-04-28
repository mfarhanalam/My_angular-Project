import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

type MESSAGE_TYPE = 'success' | 'error' | 'delete' | 'warn' | 'info';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  showMessage(message: string, messageType: MESSAGE_TYPE) {
    const severity = messageType === 'success' || messageType === 'error' || messageType === 'delete' || messageType === 'warn' ? messageType : 'info';
    this.messageService.add({
      severity: severity,
      // summary: messageType,
      detail: message,
      life: 2000
    });
  }
}
