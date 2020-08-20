import { Injectable } from '@angular/core';
import QUESTIONS from './questions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http: HttpClient) { }

  getRandomQuestion(): string {
    return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)].prompts;
  }

  getMemories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/memories`);
  }

  getMemoriesCount(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/memories/count`);
  }

  postMemories(params): Observable<any> {
    return this.http.post(`${environment.baseUrl}/memories`, params);
  }

  getMyMemories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/memories/mine`);
  }
}
