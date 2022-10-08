import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationFormComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required])
  }
  );

  constructor() { }

  ngOnInit(): void {
  }


  sendAuthorizationData() {
    console.log(this.registrationForm);
  }
}
