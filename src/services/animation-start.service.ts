import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: 'root' })
export class AnimationStartService {

  letterOpened = new Subject<void>();
  name = new Subject<string>();

  constructor() {}
}
