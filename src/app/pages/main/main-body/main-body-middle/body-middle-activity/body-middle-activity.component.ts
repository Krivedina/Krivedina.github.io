import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'body-middle-activity',
  templateUrl: './body-middle-activity.component.html',
  styleUrls: ['./body-middle-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyMiddleActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
