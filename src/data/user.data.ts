export class ActiveUsers {
    private _opportunityId: string;
    private _users: any[] = [];

    constructor(opportunityId: string, users: any[]) {
        this._opportunityId = opportunityId;
        this._users = users;
    }

    set users(user: any) {
        if (!this._users.some(u => u === user))
            this._users.push(user);
    }

    get users() {
        return this._users;
    }

    get opportunityId() {
        return this._opportunityId;
    }

    removeUser(user: any) {
        const indexOfUser = this._users.findIndex(item => item === user);

        if (indexOfUser > -1) {
            this._users.splice(indexOfUser, 1);
        }
    }
}