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
  // Observable for the list of users (used with async pipe in template)
  users$!: Observable<any[]>;
  // Current page number for pagination
  currentPage: number = 1;
  // Number of users to display per page
  itemsPerPage: number = 5;
  // Stores the logged-in user's name or email
  loggedInUser: string | null = null;

  // Inject UserService for API calls and Router for navigation
  constructor(private userService: UserService, private router: Router) {}

  // On component initialization, get the logged-in user and load users data
  ngOnInit(): void {
    // Retrieve logged-in user info from localStorage
    this.loggedInUser = localStorage.getItem('loggedInUser');
    // Load the users for the current page
    this.loadUsers();
  }

  // Fetch users for the current page using the UserService
  loadUsers(): void {
    this.users$ = this.userService.getUsers(this.currentPage, this.itemsPerPage);
  }

  // Handle pagination: update the page and reload users
  onPageChange(page: number): void {
    if (page < 1) return; // Prevent navigating to pages less than 1
    this.currentPage = page;
    this.loadUsers();
  }

  // Logout the user and navigate to the login page
  logout(): void {
    // Clear all localStorage data on logout
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}