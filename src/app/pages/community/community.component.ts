import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
