import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrl: './graph-card.component.scss',
})
export class GraphCardComponent implements OnInit {
  description!: string;
  number!: number;

  ngOnInit() {
    this.description = 'Number of Test';
    this.number = 10;
  }
}
