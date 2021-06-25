import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarousalComponent implements OnInit {
  images = [
    {
      title: 'Best Perfumes',
      short: 'We provide best quality perfumes',
      src: '../../../assets/carousal0.jpg',
    },
    {
      title: 'Modern Denim Jeans',
      short: 'Best Denim jeans avaialbe at your doorstep',
      src: '../../../assets/carousal1.jpg',
    },
    {
      title: 'High quality t-shirts',
      short: 'Best',
      src: '../../../assets/carousal2.jpg',
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
