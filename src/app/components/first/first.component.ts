import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input()
    // @ts-ignore
  user: User;

  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  get userFirstName(): string {
    return this.user.firstName;
  }

  get userSecondName(): any {
    if (this.user.secondName) return this.user.secondName;
  }

  get isNameFull(): boolean {
    return !!(this.user.firstName && this.user.secondName);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  onButtonClick(): void {
    this.buttonClicked.emit(this.user.firstName);
  }
}

export interface User {
  firstName: string,
  secondName: string | undefined,
}
