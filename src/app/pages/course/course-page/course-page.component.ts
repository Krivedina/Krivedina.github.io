import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
