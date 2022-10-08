import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-body-top',
  templateUrl: './main-body-top.component.html',
  styleUrls: ['./main-body-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBodyTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
