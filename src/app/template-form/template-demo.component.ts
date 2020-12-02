import { Component, OnInit, ViewChild} from '@angular/core';
import { InMemoryHeroService } from '../core/in-memory-hero.service';
import { Hero } from '../core/hero';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.less']
})
export class TemplateDemoComponent implements OnInit {

  heroes$!: Observable<Hero[]>;

  constructor(private service: InMemoryHeroService) { }

  ngOnInit() {
    this.heroes$=this.service.getHeroes();
  }
}
