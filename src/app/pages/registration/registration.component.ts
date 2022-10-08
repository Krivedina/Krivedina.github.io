import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required])
  }
  );

  constructor() { }

  ngOnInit(): void {
  }


  sendRegistrationData() {
    console.log(this.registrationForm);
  }
}
