import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../experience';
import { ExperienceDataService } from '../../experience-data.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './experienceModal.component.html',
  styleUrls: ['./experienceModal.component.css']
})
export class NgbdModalContent {
  @Input() rowInfo;
  openLink(link: string): void {
  	window.open(link);
  }
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
	experiences: Experience[] = [];
	constructor(private experienceService: ExperienceDataService, private modalService: NgbModal) { }
	rowClicker(clickedItem: any): void {
		const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg', centered: true });
    	modalRef.componentInstance.rowInfo = clickedItem;
		console.log(clickedItem.id);
	}
	ngOnInit(): void {
		this.dtOptions = {
			pageLength: 15
		};
		this.getExperienceWork();
	}
	getExperienceWork(): void {
		this.experienceService.getExperienceWork().subscribe(experiences => this.experiences = experiences);
	}

}
