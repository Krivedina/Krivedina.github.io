import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent implements OnInit {
  @Input()
  onPersonalPage = true;

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordAgain: new FormControl('', [Validators.required])
  }
  );

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendRegistrationData() {
    console.log(this.registrationForm);
    this.router.navigate(['registration/create-user']);
  }
}
