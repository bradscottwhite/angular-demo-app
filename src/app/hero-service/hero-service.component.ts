import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-service',
  templateUrl: './hero-service.component.html',
  styleUrls: ['./hero-service.component.css']
})
export class HeroServiceComponent implements OnInit {
	heroes$!: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(private heroService: HeroService) { }

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes$ = this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((term: string) => this.heroService.searchHeroes(term))
		)
	}

}
