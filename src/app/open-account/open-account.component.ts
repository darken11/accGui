import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'app-open',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss']
})
export class OpenAccountComponent implements OnInit {

  accountFormGroup?: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      clientId: [0, Validators.required],
      initCredit: [0, Validators.required]

    });
  }

  onCreatAccount() {

    this.accountService.onCreatAccount(this.accountFormGroup?.value).subscribe(data => {
      console.log(data);
    });


  }

}
