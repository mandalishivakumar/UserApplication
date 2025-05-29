import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('loggedInUser');
  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    window.location.href = '/login';
    return false;
  }
  return true;
};