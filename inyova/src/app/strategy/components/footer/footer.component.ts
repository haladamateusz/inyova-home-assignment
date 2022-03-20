import { Component, EventEmitter, Output } from '@angular/core';
import { FOOTER_ACTIONS } from "../../../shared/enums/footer-actions.enum";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  FOOTER_ACTIONS = FOOTER_ACTIONS;
  @Output() action = new EventEmitter<string>();
  emitAction(selectedAction: FOOTER_ACTIONS) {
    this.action.emit(selectedAction);
  }
}
