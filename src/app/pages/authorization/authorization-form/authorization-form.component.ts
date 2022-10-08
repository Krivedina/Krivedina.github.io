import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationFormComponent implements OnInit {

  authorizationForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required])
  }
  );

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  sendAuthorizationData() {
    console.log(this.authorizationForm);
    this.router.navigate(['/user']);
  }
}
