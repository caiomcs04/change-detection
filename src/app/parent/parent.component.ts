import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  parentFood: any[] = []

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parentFood = ['test']
      this.cd.markForCheck()
    }, 2000)
  }

  triggerParent() {
    console.log("trigger parent")
  }

}
