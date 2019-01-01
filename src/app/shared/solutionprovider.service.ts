import { EventEmitter, Injectable } from '@angular/core';
import { ClientType } from './client-type';
import { BaseService } from './base-service';
import { Observable, of } from 'rxjs';

@Injectable()
export class SolutionproviderService implements BaseService {

  showStartupPage: boolean;
  solutionNameList: string[] = [];
  onContentStatusChanged: EventEmitter<{enableContent: boolean}> = new EventEmitter();
  onLanguageChanged: EventEmitter<{language: string}> = new EventEmitter();
  currentLanguage: string;

  constructor(private cefCustomObject: ClientType) {
    this.showStartupPage = true;
    this.currentLanguage = 'en-US';
    document.addEventListener('ContentStatusChanged', (event: CustomEvent) => {
      this.onContentStatusChanged.emit({
        enableContent: event.detail.contentStatus
      });
    });
    document.addEventListener('LanguageChanged', (event: CustomEvent) => {
      console.dir(event);
      this.onLanguageChanged.emit({
        language: event.detail
      });
    });
  }

  getSolutionList(): string[] {
    let num = 0;

    const projectName = this.cefCustomObject.getSolutionList();
    if (projectName !== '') {
      const result = JSON.parse(projectName);

    for (num = 0; num < result.length; num++) {
      this.solutionNameList.push(result[num]);
    }
  }
  return this.solutionNameList;
}

  getLanguage(): string {
    const language = this.cefCustomObject.getLanguage();
    if (language !== '') {
      this.currentLanguage = JSON.parse(language);
    }
    return this.currentLanguage;
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
