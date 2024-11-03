import { Component } from '@angular/core';
import { DataSourceUser } from './data-source';
import { NgClass } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgClass,
    CdkTableModule
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor() {
    this.dataSource.init([
      {
        id: 1,
        name: 'User 1',
        email: 'mail@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      },
      {
        id: 2,
        name: 'User 2',
        email: 'mail2@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      },
      {
        id: 3,
        name: 'User 3',
        email: 'mail3@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      }
    ]);
  }
}
