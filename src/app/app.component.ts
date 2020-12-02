import { Component, OnInit } from '@angular/core';
import { CheckUpdateService } from './core/check-update.service';
import { LogUpdateService } from './core/log-update.service';
import { RandomPhotoService } from './core/random-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  imageurl!:string;

  constructor(private logupdate:LogUpdateService, private checkupdate: CheckUpdateService,
    private randomPhotoService : RandomPhotoService) {
  }

  ngOnInit(): void {
    this.randomPhotoService.getPhoto().subscribe(val=> this.imageurl = val[0].urls.thumb);
  }
  title = 'Test';
}
