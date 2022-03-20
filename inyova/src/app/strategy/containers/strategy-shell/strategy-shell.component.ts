import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FOOTER_ACTIONS } from "../../../shared/enums/footer-actions.enum";

@Component({
  selector: 'app-strategy-shell',
  templateUrl: './strategy-shell.component.html',
  styleUrls: ['./strategy-shell.component.scss']
})
export class StrategyShellComponent {

  constructor(private router: Router) {
  }

  handleAction(action: string) {
    switch (action) {
      case FOOTER_ACTIONS.CONSULTATION:
        break;
      case FOOTER_ACTIONS.OPEN_ACCOUNT:
        this.router.navigateByUrl('/next-steps');
        break;
      case FOOTER_ACTIONS.CHAT:
        break;
    }
  }
}
