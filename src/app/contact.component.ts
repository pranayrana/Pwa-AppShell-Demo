import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(
      prams=> {
        console.log(`Mandatory parameter`,prams.get('id'));
        console.log(`Optional parameter `, prams.get('title'))
      }
    );
    this.activateroute.queryParams.subscribe(
      prams=> {
        if(prams['id1'])
        console.log(`Query parameter `,prams['id1'])
      }
    );
  }
}
