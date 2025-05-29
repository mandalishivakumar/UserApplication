import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users$!: Observable<any[]>;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  loggedInUser: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.loadUsers();
  }

  loadUsers(): void {
    this.users$ = this.userService.getUsers(this.currentPage, this.itemsPerPage);
  }

  onPageChange(page: number): void {
    if (page < 1) return;
    this.currentPage = page;
    this.loadUsers();
  }

  logout(): void {
    // Add any logout logic here if needed
    this.router.navigate(['/login']);
  }
}