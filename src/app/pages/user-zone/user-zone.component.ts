import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-zone',
  templateUrl: './user-zone.component.html',
  styleUrls: ['./user-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserZoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
