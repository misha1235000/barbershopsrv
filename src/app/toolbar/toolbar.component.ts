// toolbar.component

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  /**
   * Removes the active of a target class if other is beign clicked.
   * @param event
   */
  InfoClicked(event) {
    event.target.classList.remove('active');
  }
}