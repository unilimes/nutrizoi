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
}