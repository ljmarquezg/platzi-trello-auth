import { Component, inject, OnInit } from '@angular/core';
import { DataSourceUser } from './data-source';
import { NgClass } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { UsersService } from '@services/users.service';
import { User } from '@models/users.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgClass,
    CdkTableModule
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit{
  private usersService: UsersService = inject(UsersService);
  
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor() {
  }

  ngOnInit() {
    console.log('chapapote');
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.dataSource.init(users);
    });
  }
}
