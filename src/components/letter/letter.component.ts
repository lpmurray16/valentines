import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AnimationStartService } from '../../services/animation-start.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'letter',
    templateUrl: './letter.component.html',
    styleUrl: './letter.component.scss',
    standalone: true,
    imports: [CommonModule],
})

export class LetterComponent implements OnInit {
    opened: boolean = false;
    yesClicked: boolean = false;
    animationService = inject(AnimationStartService);

    @ViewChild('noButton', { static: false }) noButton!: ElementRef<HTMLButtonElement>;
    constructor() { }

    ngOnInit() {
        this.animationService.letterOpened.subscribe(() => {
            console.log('Letter opened');
            this.opened = true;
        });
    }

    moveNoButton() {
        if (this.noButton) {
            const button = this.noButton.nativeElement;

            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Get button dimensions
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;

            // Generate random positions within safe viewport bounds
            const maxX = viewportWidth - buttonWidth - 100; // Prevent going off-screen
            const maxY = viewportHeight - buttonHeight - 100;

            const randomX = Math.max(20, Math.random() * maxX); // Minimum margin of 20px
            const randomY = Math.max(20, Math.random() * maxY);

            // Apply new position
            button.style.position = 'absolute';
            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
            button.style.transition = 'top 0.3s ease-out, left 0.3s ease-out';
        }
    }
}