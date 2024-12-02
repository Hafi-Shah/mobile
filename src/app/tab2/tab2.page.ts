import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class Tab2Page implements OnInit {
  amount: number = 0;
  numberOfPeople: number = 1;
  tipPercentage: number = 0;
  tipAmount: number = 0;
  totalPerPerson: number = 0;

  peopleOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor(private navController: NavController) {}

  updateTotal(source: 'percentage' | 'amount') {
    if (source === 'percentage') {
      // Update tip amount based on percentage
      this.tipAmount = (this.amount * this.tipPercentage) / 100;
    } else if (source === 'amount') {
      // Update tip percentage based on amount
      this.tipPercentage = this.amount
        ? (this.tipAmount / this.amount) * 100
        : 0;
    }

    // Calculate total amount per person
    const totalAmount = this.amount + this.tipAmount;
    this.totalPerPerson = this.numberOfPeople
      ? totalAmount / this.numberOfPeople
      : totalAmount;
  }

  // Retrieve the state passed from the previous page
  getState() {
    const state = window.history.state;
    this.amount = state.amount || 0;
    this.updateTotal('percentage'); // Initial calculation
  }
  goBack(): void {
    this.navController.back(); // Use NavController's back() method for navigation
  }
  ngOnInit(): void {
    this.getState();
  }
}
