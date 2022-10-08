import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'body-middle-promo',
  templateUrl: './body-middle-promo.component.html',
  styleUrls: ['./body-middle-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyMiddlePromoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
