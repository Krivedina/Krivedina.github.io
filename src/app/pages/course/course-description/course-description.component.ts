import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
