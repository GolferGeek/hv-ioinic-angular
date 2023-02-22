import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {BehaviorSubject} from 'rxjs'

import Thought from '../models/thought.model'
import {AuthService} from '@auth0/auth0-angular'

@Injectable({ providedIn: 'root' })
export class ThoughtService {

  url = environment.api + '/thoughts';

  myThoughtsSubject = new BehaviorSubject<Thought[] | null>(null);
  myThoughts$ = this.myThoughtsSubject.asObservable();
  currentThoughtSubject = new BehaviorSubject<Thought | null>(null);
  currentThought$ = this.currentThoughtSubject.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getThoughts() {

    this.http.get<Thought[]>(`${this.url}`).subscribe((thoughts: Thought[]) => {
      this.myThoughtsSubject.next(thoughts);
    });
  }
}
