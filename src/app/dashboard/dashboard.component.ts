import { Component, OnInit } from '@angular/core';
//import {Component} from '@angular/core';
 import {MatSnackBar} from '@angular/material';

//import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// @Component({
//   selector: 'snack-bar-overview-example',
//   templateUrl: 'snack-bar-overview-example.html',
//   styleUrls: ['snack-bar-overview-example.css'],
// })

// @Component({
//   selector: 'slider-overview-example',
//   templateUrl: 'slider-overview-example.html',
//   styleUrls: ['slider-overview-example.css'],
// })
// export class SnackBarOverviewExample {
//   constructor(private snackBar: MatSnackBar) {}

//   openSnackBar(message: string, action: string) {
//     this.snackBar.open(message, action, {
//       duration: 2000,
//     });
//   }
// }


export class DashboardComponent implements OnInit {

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  constructor( private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}


//export class SliderOverviewExample {}


// @title Basic slider

