import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-body-bottom',
  templateUrl: './main-body-bottom.component.html',
  styleUrls: ['./main-body-bottom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBodyBottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
