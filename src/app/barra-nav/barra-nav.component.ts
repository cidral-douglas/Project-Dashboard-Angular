import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  disparaEvento(){
    this.onToggle.emit();
  }

}
