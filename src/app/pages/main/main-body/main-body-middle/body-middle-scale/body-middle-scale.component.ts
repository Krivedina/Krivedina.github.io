import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'body-middle-scale',
  templateUrl: './body-middle-scale.component.html',
  styleUrls: ['./body-middle-scale.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyMiddleScaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
