import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnTitel!: string;
  @Output() onClick = new EventEmitter();
   @Input() disabled: boolean = false;


  emitEvent() {
    this.onClick.emit();
  }
}
