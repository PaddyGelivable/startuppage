import { EventEmitter, Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockServiceService implements BaseService {
  onContentStatusChanged: EventEmitter<{enableContent: boolean}> = new EventEmitter();
  showStartupPage: boolean;
  currentLanguage: string;

  projectList = [
    'project10.ccwsln',
    'project11.ccwsln',
    'project12.ccwsln',
  ];

  constructor() {
    this.showStartupPage = true;
    this.currentLanguage = 'en-US';
    document.addEventListener('ContentStatusChanged', (event: CustomEvent) => {
      this.onContentStatusChanged.emit({
        enableContent: event.detail.contentStatus
      });
    });
  }

  openProject(projectName: string) {

  }

  getSolutionList(): string[] {
    return this.projectList;
  }

  getLanguage(): string {
    return this.currentLanguage;
  }

  newProject(): void {

  }

  openExistingProject(): void {

  }

  discoverProject(): void {

  }
}
