import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = 
  { 
    id:18, 
    name:'Dr IQ',
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet'
  };

  submitted = false;

  onSubmit() { this.submitted = true; }

}
