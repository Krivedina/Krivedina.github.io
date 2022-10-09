import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationUserComponent implements OnInit {
  @Input()
  onPersonalPage = true;

  registrationUserForm = new FormGroup({
    surname: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required])
  }
  );

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  sendAuthorizationData() {
    console.log(this.registrationUserForm);
    this.router.navigate(['user/profile']);
  }
}
