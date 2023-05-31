import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { NgForm, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invite-barber',
  templateUrl: './invite-barber.component.html',
  styleUrls: ['./invite-barber.component.css']
})
export class InviteBarberComponent implements OnInit {

  constructor(private auth: AuthService, private $route: ActivatedRoute, private router: Router) { }

  private pageTitle: String = 'Accept Invitation';
  private project_title: String;

  private invitebarberForm: FormGroup;
  inviteId: string;

  ngOnInit() {
    this.project_title = this.auth.vars.project_title;
    this.inviteId = this.$route.snapshot.params['inviteId']

    // design login form attribute
    this.invitebarberForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      invitationToken: new FormControl(this.inviteId, [Validators.required])
    });
  }

  submitInvteBarber(form: NgForm): void {
    // show loader
    this.auth.vars.displayLoader(true);
    // call for login
    this.auth.inviteBarber(form.value).subscribe((res) => {
      // hide loader
      this.auth.vars.displayLoader(false);

      this.router.navigate(['/login']);

      this.auth.vars.showNotification(res.message, "Barber Invite", "success");
    }, (err) => {
      // hide loader
      this.auth.vars.displayLoader(false);
      // show login error
      this.auth.vars.showNotification(this.auth.vars.convertObjectToString(err.data), err.message);
    })
  }

}
