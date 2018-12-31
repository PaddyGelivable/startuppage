import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class BaseService {
    getSolutionList: () => string[];
    getLanguage: () => string;
    openProject: (projectName: string) => void;
    newProject: () => void;
    openExistingProject: () => void;
    discoverProject: () => void;
    showStartupPage: boolean;
    onContentStatusChanged: EventEmitter<{enableContent: boolean}>;
}
