import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
