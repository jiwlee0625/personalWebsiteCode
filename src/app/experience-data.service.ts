import { Injectable } from '@angular/core';
import { Experience } from './experience';

import { EXPERIENCES } from '../assets/experiences-data';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService {

	constructor() { }
	getExperienceWork(): Observable<Experience[]> {
		return of(EXPERIENCES);
	}
}
