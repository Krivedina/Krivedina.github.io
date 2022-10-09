import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationFormComponent implements OnInit {

  authorizationForm = new FormGroup({
    email: new FormControl('admin@gmail.com', [Validators.required,
    Validators.email]),
    password: new FormControl('admin', [Validators.required])
  }
  );

  constructor(private router: Router, private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    // this.authorizationService.postLogin().subscribe(console.log);
  }


  sendAuthorizationData() {
    console.log(this.authorizationForm);
    this.router.navigate(['/user']);
  }
}
