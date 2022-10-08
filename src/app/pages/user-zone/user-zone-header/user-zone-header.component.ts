import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-zone-header',
  templateUrl: './user-zone-header.component.html',
  styleUrls: ['./user-zone-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserZoneHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
