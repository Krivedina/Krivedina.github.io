import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-path',
  templateUrl: './course-path.component.html',
  styleUrls: ['./course-path.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePathComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
