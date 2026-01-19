import { diagnosticUsers } from '../data/diagnosticData';
import type { IDiagnosticData } from '../data/diagnosticData';

const STORAGE_KEY = 'vysk_diagnostics_data';

export const diagnosticService = {
    getAll: (): IDiagnosticData[] => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const dynamicUsers: IDiagnosticData[] = stored ? JSON.parse(stored) : [];
        // Merge static users (avoiding duplicates by username)
        const allUsers = [...dynamicUsers];

        diagnosticUsers.forEach(staticUser => {
            if (!allUsers.find(u => u.username === staticUser.username)) {
                allUsers.push(staticUser);
            }
        });

        return allUsers;
    },

    save: (user: IDiagnosticData) => {
        const currentUsers = diagnosticService.getAll();
        const index = currentUsers.findIndex(u => u.username === user.username);

        if (index >= 0) {
            currentUsers[index] = user;
        } else {
            currentUsers.push(user);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUsers));
    },

    delete: (username: string) => {
        const currentUsers = diagnosticService.getAll().filter(u => u.username !== username);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUsers));
    },

    getByUsername: (username: string): IDiagnosticData | undefined => {
        return diagnosticService.getAll().find(u => u.username === username);
    }
};
