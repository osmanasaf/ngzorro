import { Component, OnInit } from '@angular/core';

export interface TreeNodeInterface {
  key: string;
  name: string;
  phoneNumber?: number | string;
  level?: number;
  expand?: boolean;
  email?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  listOfMapData: TreeNodeInterface[] = [
    {
      key: `1`,
      name: 'Codefirst',
      phoneNumber: '02123455876',
      email: 'info@codefirst.io',
      children: [
        {
          key: `1-1`,
          name: 'Mehmet Yaman',
          phoneNumber: +905428547273,
          email: 'mehmetyaman@gmail.com'
        },
        {
          key: `1-2`,
          name: 'Mahmut Boğaz',
          phoneNumber: +905419078545,
          email: 'mahmutbogaz@gmail.com',
        },
        {
          key: `1-3`,
          name: 'Jim Green sr.',
          phoneNumber: 72,
          email: 'London No. 1 Lake Park',
          children: [
            {
              key: `1-3-1`,
              name: 'Jim Green',
              phoneNumber: 42,
              email: 'London No. 2 Lake Park',
              children: [
                {
                  key: `1-3-1-1`,
                  name: 'Jim Green jr.',
                  phoneNumber: 25,
                  email: 'London No. 3 Lake Park'
                },
                {
                  key: `1-3-1-2`,
                  name: 'Jimmy Green sr.',
                  phoneNumber: 18,
                  email: 'London No. 4 Lake Park'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: `2`,
      name: 'TurkTelekom',
      phoneNumber: +902124578485,
      email: 'ik@turktelekom.com'
    }
  ];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }
}
