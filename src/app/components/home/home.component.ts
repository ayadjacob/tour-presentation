import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isBouncing_1: boolean = false;
  isBouncing_2: boolean = false;
  isBouncing_3: boolean = false;
  isZoomin:boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      // Navigate to the specified route
      this.isZoomin = true;
    }, 900); // Adjust the timeout value based on your animation duration
  }

  changeClass_1() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_1 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/worldLanguages']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_2() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_2 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/worldLanguages']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_3() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_3 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/worldLanguages']);
    }, 680); // Adjust the timeout value based on your animation duration
  }
}

