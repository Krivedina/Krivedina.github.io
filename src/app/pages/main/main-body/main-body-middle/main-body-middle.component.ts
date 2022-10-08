import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-body-middle',
  templateUrl: './main-body-middle.component.html',
  styleUrls: ['./main-body-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBodyMiddleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
