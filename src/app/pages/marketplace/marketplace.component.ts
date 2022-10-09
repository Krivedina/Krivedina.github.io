import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketplaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
