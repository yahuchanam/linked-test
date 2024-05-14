import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpDefaultService {
  protected http = inject(HttpClient);
  public loading = new BehaviorSubject<boolean>(false);

  constructor() {}
}
