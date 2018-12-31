import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared/base-service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  solutionList: string[];
  showStartupPage: boolean;
  isContentDisabled: boolean;

  constructor(private service: BaseService) {
    this.service.onContentStatusChanged.subscribe((value) => {
      this.updateContent(value.enableContent);
    });
  }

  ngOnInit() {
    this.solutionList = this.service.getSolutionList();
    this.isContentDisabled = false;
    this.showStartupPage = this.service.showStartupPage;
  }

  onSelect(name: string): void {
    this.service.openProject(name);
  }

  onSetStartupPage(): void {
    this.service.showStartupPage = this.showStartupPage;
  }

  newProject(): void {
    this.service.newProject();
  }

  openExistingProject(): void {
    this.service.openExistingProject();
  }

  discoverProject(): void {
    this.service.discoverProject();
  }

  updateContent(value: boolean): void {
    this.isContentDisabled = value;
  }
}
