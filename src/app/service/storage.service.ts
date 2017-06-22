import { Injectable } from '@angular/core';

declare var localStorage;
@Injectable()
export class StorageService {
  public get(key: string) {
    return JSON.parse(localStorage.getItem(`nutrizoi:${key}`));
  }

  public set(key: string, value: any) {
    localStorage.setItem(`nutrizoi:${key}`, JSON.stringify(value));
  }

  public remove(key: string) {
    localStorage.removeItem(`nutrizoi:${key}`);
  }

  public getSession(key: string) {
    return JSON.parse(sessionStorage.getItem(`nutrizoi:${key}`));
  }

  public setSession(key: string, value: any) {
    sessionStorage.setItem(`nutrizoi:${key}`, JSON.stringify(value));
  }

  public removeSession(key: string) {
    sessionStorage.removeItem(`nutrizoi:${key}`);
  }
}