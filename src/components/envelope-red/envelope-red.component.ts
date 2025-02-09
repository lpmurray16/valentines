import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationStartService } from '../../services/animation-start.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-envelope-red',
  imports: [CommonModule],
  templateUrl: './envelope-red.component.html',
  styleUrl: './envelope-red.component.scss',
  standalone: true,
})
export class EnvelopeRedComponent implements OnInit {
  name: string = 'Valentine';
  opened: boolean = false;
  activeRoute = inject(ActivatedRoute);
  animationService = inject(AnimationStartService);
  timeExpired: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.name = params['name'];
    });

    // create a timer that after 5 seconds will set the timeExpired to true
    setTimeout(() => {
      this.timeExpired = true;
    }, 5000);
  }

  startOpeningLetter() {
    this.opened = true;
    this.animationService.letterOpened.next();
  }
}
