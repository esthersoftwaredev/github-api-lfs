import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private readonly baseUrl = 'https://api.github.com/repos/treeverse/lakeFS/issues';

  constructor(private http: HttpClient) {}

  getAllIssues(page: number = 1, perPage: number = 30): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<any[]>(this.baseUrl, { params });
  }
}
