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
    isNoButtonRunning: boolean = false;
    animationService = inject(AnimationStartService);
    name: string = '';

    @ViewChild('noButton', { static: false }) noButton!: ElementRef<HTMLButtonElement>;

    constructor() { }

    ngOnInit() {
        this.animationService.letterOpened.subscribe(() => {
            console.log('Letter opened');
            this.opened = true;
        });
        this.animationService.name.subscribe((name: string) => {
            console.log('Name received');
            this.name = name;
        });
    }

    yesBtnClicked() {
        this.yesClicked = true;
        this.isNoButtonRunning = false;
    }

    moveNoButton() {
        if (!this.isNoButtonRunning) {
            this.isNoButtonRunning = true;
            if (this.noButton) {
                const button = this.noButton.nativeElement;
                button.classList.add('running');
            }
        }
    }
}