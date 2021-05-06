import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-info',
  templateUrl: './info-account.component.html',
  styleUrls: ['./info-account.component.scss']
})
export class InfoAccountComponent implements OnInit {

  accountResult: any;
  constructor(public  http: HttpClient, private  accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getInfoAccount()
      .subscribe((data: any) => {
        this.accountResult = data;
      });
  }
}
