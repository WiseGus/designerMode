import { Component, OnInit } from '@angular/core';
import { DesignModeService } from '../design-mode.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    public designModeSvc: DesignModeService) { }

  ngOnInit() {
  }

}
