export class ActiveList {
    private opportunityId: string;
    private users: any[] = [];

    constructor(opportunityId: string, users: any[]) {
        this.opportunityId = opportunityId;
        this.users = users;
    }

    set putUser(user: any) {
        if (!this.users.some(u => u === user))
            this.users.push(user);
    }

    get getUsers() {
        return this.users;
    }

    set setOpportunityId(opportunityId: string) {
        this.opportunityId = opportunityId;
    }

    get getOpportunityId() {
        return this.opportunityId;
    }

    get isEmpty() {
        return this.users.length === 0;
    }

    indexOfUser(user: any) {
        return this.users.findIndex(item => item === user);
    }

    removeUser(user: any) {
        const indexOfUser = this.indexOfUser(user);

        if (indexOfUser > -1) {
            this.users.splice(indexOfUser, 1);
        }
    }
}

class OpportunitiesRepository {
    private activeList: ActiveList[];

    constructor() {
        this.activeList = [];
    }

    hasOpportunity(opportunityId: string) {
        return this.activeList.some(items => items.getOpportunityId === opportunityId);
    }

    set addOpportunity(newOpportunity: ActiveList) {
        const indexOfOpportunity = this.activeList.findIndex(
            item => item.getOpportunityId === newOpportunity.getOpportunityId
        );
        if (indexOfOpportunity < 0) {
            this.activeList.push(newOpportunity);
        } else {
            this.activeList[indexOfOpportunity].putUser = newOpportunity.getUsers[0];
        }
    }

    removeOpportunity(opportunityId: string) {
        const indexToRemove = this.activeList.findIndex(
            item => item.getOpportunityId === opportunityId
        );

        if (indexToRemove > -1) {
            this.activeList.splice(indexToRemove, 1)
        }
    }

    getUsersOfOpportunity(opportunityId: string) {
        const activeItem = this.activeList.find(list => list.getOpportunityId === opportunityId);

        if (activeItem) return activeItem.getUsers;

        return [];
    }

    removeUserOfOpportunity(opportunityId: string, user: any) {
        const indexOfOpportunity = this.activeList.findIndex(
            item => item.getOpportunityId === opportunityId
        );

        if (indexOfOpportunity > -1) {
            this.activeList[indexOfOpportunity].removeUser(user);
            // if (this.activeList[indexOfOpportunity].isEmpty) {
            //     this.activeList.splice(indexOfOpportunity, 1);
            // } else {
            //     const indexOfUser = this.activeList[indexOfOpportunity].indexOfUser(user);

            //     if(indexOfUser > -1) {
            //         this.activeList[indexOfOpportunity].
            //     }
            // }
        }
    }
}

export const opportunitiesRepository = new OpportunitiesRepository();