import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionproviderService {

  showStartupPage: boolean;
  solutionNameList: string[] = [];

  public onContentStatusChanged: EventEmitter<{enableContent: boolean}> = new EventEmitter();

  constructor() {
    this.showStartupPage = true;
    document.addEventListener('ContentStatusChanged', (event: CustomEvent) => {
      this.onContentStatusChanged.emit({
        enableContent: event.detail.contentStatus
      });
    });
  }

  getSolutionList(): string[] {
    let num = 0;

    cefCustomObject.getSolutionList().then(( projectName ) => {
      if (projectName !== '') {
        const result = JSON.parse(projectName);

        for (num = 0; num < result.length; num++) {
          this.solutionNameList.push(result[num]);
        }}});

    return this.solutionNameList;
  }

  openProject(projectName: string): void {
    cefCustomObject.openProject(projectName);
  }

  newProject(): void {

  }

  openExistingProject(): void {

  }

  discoverProject(): void {

  }
}
