import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../core/hero';
import { InMemoryHeroService } from '../core/in-memory-hero.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.less']
})
export class EditHeroComponent implements OnInit {

  selectedHero!: Hero;
  @ViewChild('heroForm')  heroForm! : NgForm;
  
  constructor(private service: InMemoryHeroService,
            private activateRoute: ActivatedRoute,
            private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=> {
      const id = +params.get('id')!;
      this.service.getHero(id).subscribe(hero=> this.selectedHero=hero);
    });
  }

  save() {
    if(this.heroForm.valid){
      this.service.updateHero(this.selectedHero);
      this.router.navigate(['template']);
    }
   }

  cancel() {
    this.router.navigate(['template']);
  }  
}
