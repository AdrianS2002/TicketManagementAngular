import { AfterContentInit, afterNextRender, afterRender, AfterRenderPhase, Component, ContentChild, ElementRef, Host, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', 
    //'(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
 
  //@HostBinding('class') className = 'control';
  //@HostListener(('click')) onClick() {console.log("clicked");}
  label = input.required<String>();
  private el = inject(ElementRef);
  @ContentChild('input') private control: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;

constructor() {
  afterRender(() => {console.log('AfterRender')});
  afterNextRender(() => {console.log('AfterNextRender')});
}

  onClick() {
    console.log('ControlComponent');
    console.log(this.el);
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    
  }
}
