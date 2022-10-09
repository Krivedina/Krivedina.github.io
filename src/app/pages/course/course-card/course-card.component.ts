import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCourse() {
    this.router.navigate(['user/activity/course-list/course-page-1'])
  }
}
