import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

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
export class AppComponent {
	title = "lfs-angular";

  readonly panelOpenState = signal(false);
}
