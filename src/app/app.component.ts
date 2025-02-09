import { Component } from '@angular/core';
import { EnvelopeRedComponent } from "../components/envelope-red/envelope-red.component";
import { LetterComponent } from "../components/letter/letter.component";

@Component({
  selector: 'app-root',
  imports: [EnvelopeRedComponent, LetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'valentines';
}
