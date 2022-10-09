import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course-step',
  templateUrl: './course-step.component.html',
  styleUrls: ['./course-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseStepComponent implements OnInit, OnDestroy {
  slideType: string = '';

  private subscription: Subscription = new Subscription();
  constructor(private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.subscription = this.activateRoute.params.subscribe(params => {
      this.slideType = params['stepNumber'];
      this.cdr.markForCheck();
    });

  }

  ngOnInit(): void {
    console.log(this.slideType);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
