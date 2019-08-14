import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number
  num2: number
  constructor() { }

  ngOnInit() {
  }

  add(a:number, b:number): number{
    return a+b
  }
}
