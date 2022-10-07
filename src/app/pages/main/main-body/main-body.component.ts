import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
