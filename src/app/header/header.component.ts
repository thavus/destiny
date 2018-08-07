import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  isSticky = false;

  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll, true);
  }

  ngOnDestroy(){
    window.removeEventListener('scroll', this.onWindowScroll, true);
  }

  onWindowScroll = (): void => {
  let header = this.document.getElementById("myHeader");
  let sticky = header.offsetTop;
  let img = this.document.getElementById("theMarkingImage");

   if (this.document.body.scrollTop > sticky) {
        this.isSticky = true;
        //header.classList.add("sticky");
        //img.classList.add("topIsSticky");

      } else {
        this.isSticky = false;
        //header.classList.remove("sticky");
        //img.classList.remove("topIsSticky");
      }
      console.log(this.isSticky);
  }

}
