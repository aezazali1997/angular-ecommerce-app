import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss'],
})
export class SingleComponentComponent implements OnInit {
  rating: number[] = [0, 0, 0, 0];

  constructor() {}

  ngOnInit(): void {}
}
