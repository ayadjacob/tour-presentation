import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bilingual',
  templateUrl: './bilingual.component.html',
  styleUrls: ['./bilingual.component.scss'],
})
export class BilingualComponent implements OnInit {
  isBouncing_1: boolean = false;
  isBouncing_2: boolean = false;
  isBouncing_3: boolean = false;
  isBouncing_4: boolean = false;
  isBouncing_5: boolean = false;
  isBouncing_6: boolean = false;
  isBouncing_7: boolean = false;
  isBouncing_8: boolean = false;
  isZoomin: boolean = false;

  constructor(private router: Router) {}
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
      this.router.navigate(['/bilingualMath']);
    }, 500); // Adjust the timeout value based on your animation duration
  }

  changeClass_2() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_2 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_3() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_3 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_4() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_4 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_5() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_5 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_6() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_6 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_7() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_7 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }

  changeClass_8() {
    // Set isBouncing to true to apply the bounceOut class
    this.isBouncing_8 = true;

    // After changing the class, wait for the animation to complete before navigating
    setTimeout(() => {
      // Navigate to the specified route
      this.router.navigate(['/historical']);
    }, 680); // Adjust the timeout value based on your animation duration
  }
}
