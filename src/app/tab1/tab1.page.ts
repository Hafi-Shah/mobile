import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab1Page {
  amount: number | undefined;
  focused: boolean = false;

  constructor(private router: Router) {}

  goToSecondPage() {
    if (this.amount) {
      this.router.navigate(['/tab2'], {
        state: { amount: this.amount },
      });
    }
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
}
