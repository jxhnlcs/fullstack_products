import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  message: string = '';
  type: string = '';
  visible = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe((toast) => {
      if (toast) {
        this.message = toast.message;
        this.type = toast.type;
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  }
}