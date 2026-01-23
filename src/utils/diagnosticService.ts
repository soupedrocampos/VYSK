import { diagnosticUsers } from '../data/diagnosticData';
import type { IDiagnosticData } from '../data/diagnosticData';

const STORAGE_KEY = 'vysk_diagnostics_data';

export const diagnosticService = {
    getAll: (): IDiagnosticData[] => {
        const stored = localStorage.getItem(STORAGE_KEY);
        let currentData: IDiagnosticData[] = [];

        if (stored) {
            currentData = JSON.parse(stored);
        }

        // Always sync hardcoded users from the codebase to ensure updates (like Sales Copy or Video URLs) are reflected
        // taking precedence over cached/local versions of these specific users.
        const hardcodedUsernames = diagnosticUsers.map(u => u.username);

        // Filter out stored versions of hardcoded users
        const customUsers = currentData.filter(u => !hardcodedUsernames.includes(u.username));

        // Combine latest hardcoded users with custom users
        const mergedData = [...diagnosticUsers, ...customUsers];

        // Update storage with the merged, up-to-date list
        if (JSON.stringify(mergedData) !== stored) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedData));
        }

        return mergedData;
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
