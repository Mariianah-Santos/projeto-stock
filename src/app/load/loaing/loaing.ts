import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loaing',
  standalone: false,
  templateUrl: './loaing.html',
  styleUrl: './loaing.scss',
})
export class Loaing {

  constructor() {}

  @Input() loading: boolean = false;
}
