import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe, AsyncPipe, CurrencyPipe,SlicePipe, DecimalPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  presentDate = new Date();

  currentTime$!: Observable<Date>;

  title: string = "Angular Pipes";

  fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Pomegranate'];

  constructor(){
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
  }

  price : number = 20000;

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

}


