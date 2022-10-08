import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-window',
  templateUrl: './profile-window.component.html',
  styleUrls: ['./profile-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
