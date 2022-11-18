import { Component } from '@angular/core';
import { compareAsc } from 'date-fns';
@Component({
  selector: 'nz-demo-date-picker-date-render',
  template: `
    <nz-date-picker [nzDateRender]="tplRender"></nz-date-picker>
    <ng-template #tplRender let-current>
      <div
        class="ant-picker-cell-inner"
        [class.highlight1]="highlightDatefunc1(current)"
        [class.highlight2]="highlightDatefunc2(current)" >
        {{ current.getDate() }}
      </div>
    </ng-template>
  `,
  styles: [
    `
      nz-date-picker,
      nz-range-picker {
        margin: 0 8px 12px 0;
      }
      .highlight1 {
        border: 1px solid #34A798 !important;
        background-color: #CAE4DE;
      }
      .highlight2 {
        border: 1px solid #242298 !important;
        background-color: #ffdc7d;
      }
    `,
  ],
})
export class NzDemoDatePickerDateRenderComponent {
  dates1: Date[];
  dates2: Date[];
  i: number = 0;
  constructor() {
    this.dates1 = [
      new Date('2022-11-08T00:00:00'),
      new Date('2022-11-09T00:00:00'),
      new Date('2022-11-11T00:00:00'),
      new Date('2022-11-14T00:00:00'),
      new Date('2022-11-19T00:00:00'),
      new Date('2022-11-23T00:00:00'),
    ];
    this.dates2 = [
      new Date('2022-11-07T00:00:00'),
      new Date('2022-11-03T00:00:00'),
      new Date('2022-11-12T00:00:00'),
      new Date('2022-11-18T00:00:00'),
      new Date('2022-11-25T00:00:00'),
    ];
  }
  highlightDatefunc1(current: Date): boolean {
    let returnVal: boolean = this.dates1?.some((item) => {
      let date1: Date = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate()
      );
      let date2: Date = new Date(
        item.getFullYear(),
        item.getMonth(),
        item.getDate()
      );
      return compareAsc(date1, date2) == 0 ? true : false;
      //return current.toLocaleDateString()===item.toLocaleDateString();
    });
    return returnVal;
  }
  highlightDatefunc2(current: Date): boolean {
    let returnVal: boolean = this.dates2?.some((item) => {
      let date1: Date = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate()
      );
      let date2: Date = new Date(
        item.getFullYear(),
        item.getMonth(),
        item.getDate()
      );
      return compareAsc(date1, date2) == 0 ? true : false;
      //return current.toLocaleDateString()===item.toLocaleDateString();
    });
    return returnVal;
  }
}
