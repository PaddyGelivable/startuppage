import { EventEmitter } from '@angular/core';

export abstract class BaseService {
    getSolutionList: () => string[];
    openProject: (projectName: string) => void;
    newProject: () => void;
    openExistingProject: () => void;
    discoverProject: () => void;
    showStartupPage: boolean;
    onContentStatusChanged: EventEmitter<{enableContent: boolean}>;
}
