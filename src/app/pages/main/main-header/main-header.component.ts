import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(name: string) {
    const element = document.getElementById(name);
    element?.scrollIntoView({ behavior: 'smooth'});
}

}
