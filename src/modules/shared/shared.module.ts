import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// import directives
import { TrimInputDirective } from '../../directives/trim-input.directive';
// import directives
import { NumberDirective } from '../../directives/numbers-only.directive';

// import required components
import { ShowErrorsComponent } from '../../components/show-errors/show-errors.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

import { SecondsToMinuitsPipe } from '../../pipes/seconds-to-minuits/seconds-to-minuits.pipe';

import { SaloonShortDetailComponent } from '../../components/saloon-short-detail/saloon-short-detail.component';
import { BarberJoinDiscussionComponent } from '../../components/barber-join-discussion/barber-join-discussion.component';

import { AmazingTimePickerModule } from 'amazing-time-picker-angular6';

import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    AmazingTimePickerModule 
  ],
  declarations: [
    ShowErrorsComponent,
    PaginationComponent,
    SaloonShortDetailComponent,
    BarberJoinDiscussionComponent,

    TrimInputDirective,
    NumberDirective,
    SecondsToMinuitsPipe
  ], 
  exports: [
    ShowErrorsComponent,
    PaginationComponent,
    SaloonShortDetailComponent, 
    BarberJoinDiscussionComponent,
    
    TrimInputDirective,
    NumberDirective,
    SecondsToMinuitsPipe,

    MyDatePickerModule,
    AmazingTimePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
