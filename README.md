# UserApplication

A modern Angular standalone application featuring:

- **Login with Reactive Forms** and validation
- **User Management** with a paginated, searchable user grid
- **Lazy-loaded routes** for login and user list
- **Auth Guard** to protect user data routes
- **Material Icons** and responsive, clean UI

---

## Features

- **Login:** Email and password with validation. Stores user info in localStorage.
- **User List:** Fetches users from a public API, displays in a styled table with pagination.
- **Search:** Filter users by name, username, or email.
- **Logout:** Securely logs out and redirects to login.
- **Route Protection:** Only logged-in users can access the user list.
- **Lazy Loading:** Login and user list components are lazy-loaded for performance.

---

## Getting Started

### Development server

Run `ng serve` and navigate to [http://localhost:4200/](http://localhost:4200/). The app will reload if you change any source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

---

## Project Structure

- `src/app/login/` — Login component (standalone, lazy-loaded)
- `src/app/user-list/` — User list component (standalone, lazy-loaded)
- `src/app/services/user.service.ts` — User API service
- `src/app/auth.guard.ts` — Route guard for authentication
- `src/app/app.routes.ts` — Application routes


