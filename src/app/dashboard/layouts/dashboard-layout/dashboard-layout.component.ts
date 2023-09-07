import { AuthService } from './../../../auth/services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  get user () {
    return this.authService.currentUser;
  }

}
