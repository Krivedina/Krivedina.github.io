import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
