import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

 // @Output() add = new EventEmitter();

 enteredTitle = '';
 enteredText = '';
 add = output<{title: string, text: string}>();
 private form = viewChild<ElementRef<HTMLFormElement>>('form');


  ngAfterViewInit(): void {
   console.log ('AFTER')
    console.log(this.form()?.nativeElement);
  }
  ngOnInit() {
    console.log('INIT')
    console.log(this.form()?.nativeElement);
  }

  onSubmit() {
    this.add.emit({title:this.enteredTitle, text:this.enteredText});
    //this.form()?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

}
