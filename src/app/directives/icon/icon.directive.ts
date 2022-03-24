import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Icons } from '../../../assets/svg-icons'

@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnInit {

  @Input() iconName: string =  '';
  @Input() dimensions: string =  '';

  constructor(private el:ElementRef<HTMLElement>) {
  }
  
  ngOnInit(){
    this.el.nativeElement.innerHTML = Icons[this.iconName]
    if(this.dimensions){
      console.log(this.el.nativeElement)
      // this.el.nativeElement.style.width = this.dimensions;
      // this.el.nativeElement.style.height = this.dimensions;
      // this.el.setAttribute('style',`width:${this.dimensions}px; height:${this.dimensions}px`)
    }

  }

}
