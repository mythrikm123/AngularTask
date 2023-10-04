 // left-card.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.css']
})
export class LeftCardComponent {
  slides = [
    { title: 'Personalized Dental Care', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { title: 'Your Smile Deserves the Best', description: 'Pariatur qui quia distinctio magni, aliquid ducimus quod blanditiis.' },
    { title: 'Full Dedicated to Your Dental Health', description: 'Distinctio magni, aliquid ducimus quod blanditiis et sit temporibus dolorum sunt illum ex enim.' },
  ];

  currentSlide = 1;

  changeSlide(n: number): void {
    this.currentSlide = n;
  }

  
}
