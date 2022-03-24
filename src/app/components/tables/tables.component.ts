import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }

  @ViewChildren('a') dataRows: any;

  experience: any;
  education: any;
  availability: any;
  relocation: any;
  location: any;
  cgpa: any;

  currentPage = 1;

  educationFilter(event: any){
    this.education = event.target.value;
    this.classHide();
  }
  experienceFilter(event: any){
    this.experience = event.target.value;
    this.classHide();
  }
  cgpaFilter(event: any){
    this.cgpa = event.target.value;
    this.classHide();
  }
  availabilityFilter(event: any){
    this.availability = event.target.value;
    this.classHide();
  }
  relocationFilter(event: any){
    this.relocation = event.target.value;
    this.classHide();
  }
  locationFilter(event: any){
    this.location = event.target.value;
    this.classHide();
  }

  classHide(){
    console.log(this.dataRows.toArray()[0].nativeElement)
    this.add_class_hide(this.dataRows.toArray());
    var filterValues = new Array(this.experience, this.education, this.availability, this.relocation, this.location);
    var filteredBy = filterValues.filter(Boolean);
    var flag = 0;
    for(let i=0; i<this.dataRows.toArray().length; i++){
        for(let j=0; j<filteredBy.length; j++){
          if(this.dataRows.toArray()[i].nativeElement.classList.contains(filteredBy[j])){
            flag++;
          }
          else{
            flag--;
          }
        }
        if(flag == filteredBy.length){
          this.dataRows.toArray()[i].nativeElement.classList.remove("hide"); 
        }
        flag = 0;
    }
  }
  
  remove_class_hide(selectedRows:any){
    for(let a=0; a<selectedRows.length; a++){
      selectedRows[a].nativeElement.classList.remove("hide"); 
    }
  }
  
  
  add_class_hide(selectedRows:any){
    for(let b=0; b<selectedRows.length; b++){
      selectedRows[b].nativeElement.classList.add("hide"); 
    }
  }

  changePage(page: any){
    this.currentPage = page;
    this.dataRows.toArray().forEach((el: any,i: any)=>{
      let index = i+1;
      let pageSize = 3;
      let number = page * pageSize;
      if(index == number || index == (number - 1) || index == (number - 2)){
        el.nativeElement.classList.remove("hide");
      }else{
        el.nativeElement.classList.add("hide");
      }
    })
  }

}
