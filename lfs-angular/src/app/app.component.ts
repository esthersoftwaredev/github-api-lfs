import { Component, inject, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { GithubApiService } from "./services/github-api.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		MatToolbarModule,
		MatExpansionModule,
		MatButtonModule,
		MatIconModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  readonly panelOpenState = signal(false);
  allIssues: any [] = [];
  githubApiService = inject(GithubApiService);


  ngOnInit() {
    this.githubApiService.getAllIssues().subscribe(issues => {
      this.allIssues = issues;
      console.log(issues);
    });
  }
}
