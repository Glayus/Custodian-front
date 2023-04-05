import { Component, OnInit } from '@angular/core';
import { GoalsClient } from './../clients/goals.clients';
import { AuthenticationService } from './../services/authentication.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public goals: Observable<any> = this.goalsClient.getGoals();

  constructor(
    private authenticationService: AuthenticationService,
    private goalsClient: GoalsClient
  ) { }

  ngOnInit(): void { }

  logout(): void {
    this.authenticationService.logout();
  }
}


