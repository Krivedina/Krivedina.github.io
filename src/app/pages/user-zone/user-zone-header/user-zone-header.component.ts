import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-zone-header',
  templateUrl: './user-zone-header.component.html',
  styleUrls: ['./user-zone-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserZoneHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(){
    this.router.navigate(['./user/profile'])
  }

}
