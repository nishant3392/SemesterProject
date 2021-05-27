import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-screen',
  templateUrl: './opening-screen.page.html',
  styleUrls: ['./opening-screen.page.scss'],
})
export class OpeningScreenPage implements OnInit {
  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('selection');
    }, 4000);
  }

  ngOnInit() {}
}
