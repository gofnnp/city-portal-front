import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-requests',
  templateUrl: './home-requests.component.html',
  styleUrls: ['./home-requests.component.scss']
})
export class HomeRequestsComponent implements OnInit {
  public requests!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://78.85.18.10:5005/get_last4_requests').subscribe(
      {
        next: (data: any) => this.requests = data.result,
        error: (error) => console.error(error)
      }
    );
  }

}
