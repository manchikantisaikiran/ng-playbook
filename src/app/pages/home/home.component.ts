import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = '';

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;


  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry, 'Drop your Name', 'click confirm or close')
      .subscribe((v) => {
        //your logic
        console.log(v);
        this.name = v;
      });
  }

}
