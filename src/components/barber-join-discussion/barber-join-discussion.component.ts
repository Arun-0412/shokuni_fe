import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barber-join-discussion',
  templateUrl: './barber-join-discussion.component.html',
  styleUrls: ['./barber-join-discussion.component.css']
})
export class BarberJoinDiscussionComponent implements OnInit {

  constructor() { }

  private pageTitle:string = 'forum';

  ngOnInit() {
  }

  /**
   * Method to get login user image
   */
  getUser (detailField:string) {
    return JSON.parse (localStorage.getItem ('user_detail'))[detailField];
  }



}
