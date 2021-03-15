import { Component, OnInit } from '@angular/core';


interface ParentItemData {
  key: number;
  name: string;
  surName: string;
  pozision: string;
  upgradedAt: string;
  company: string;
  sharedAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  description: string;
  date: string;
  lastProcess: string;
}

@Component({
  selector: 'app-aday-list',
  templateUrl: './aday-list.component.html'
})
export class AdayListComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Mahmut',
        surName: 'Boğaz',
        pozision: 'Java Dev',
        sharedAt: '2014-12-24 23:12:00',
        upgradedAt: '2015-12-24 23:12:00',
        company: 'CodeFirst',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        description: 'This is production name',
        lastProcess: 'Upgraded: 56'
      });
    }
  }
}
