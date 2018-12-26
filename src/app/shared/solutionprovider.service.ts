import { EventEmitter, Injectable } from '@angular/core';
import { ClientType } from './client-type';
import { BaseService } from './base-service';

@Injectable()
export class SolutionproviderService implements BaseService {

  showStartupPage: boolean;
  solutionNameList: string[] = [];
  onContentStatusChanged: EventEmitter<{enableContent: boolean}> = new EventEmitter();

  constructor(private cefCustomObject: ClientType) {
    this.showStartupPage = true;
    document.addEventListener('ContentStatusChanged', (event: CustomEvent) => {
      this.onContentStatusChanged.emit({
        enableContent: event.detail.contentStatus
      });
    });
  }

  getSolutionList(): string[] {
    let num = 0;

    this.cefCustomObject.getSolutionList().then(( projectName ) => {
      if (projectName !== '') {
        const result = JSON.parse(projectName);

        for (num = 0; num < result.length; num++) {
          this.solutionNameList.push(result[num]);
        }}});

    return this.solutionNameList;
  }

  openProject(projectName: string): void {
    this.cefCustomObject.openProject(projectName);
  }

  newProject(): void {

  }

  openExistingProject(): void {

  }

  discoverProject(): void {

  }
}
