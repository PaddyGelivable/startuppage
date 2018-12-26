import { EventEmitter, Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable()
export class MockServiceService implements BaseService {

  onContentStatusChanged: EventEmitter<{enableContent: boolean}> = new EventEmitter();
  showStartupPage: boolean;

  projectList = [
    'project10.ccwsln',
    'project11.ccwsln',
    'project12.ccwsln',
  ];

  constructor() {
    this.showStartupPage = true;
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

  newProject(): void {

  }

  openExistingProject(): void {

  }

  discoverProject(): void {

  }
}
