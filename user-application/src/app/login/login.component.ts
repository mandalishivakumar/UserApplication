import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Reactive form group for login
  loginForm: FormGroup;

  // Inject FormBuilder for form creation and Router for navigation
  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login form with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      password: ['', [Validators.required, Validators.minLength(6)]] // Password is required and must be at least 6 chars
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      // Save user info (for demo, using email as name)
      localStorage.setItem('loggedInUser', this.loginForm.value.email);
      // Navigate to the users list page after successful login
      this.router.navigate(['/users']);
    } else {
      // Mark all fields as touched to show validation errors
      this.loginForm.markAllAsTouched();
    }
  }
}
