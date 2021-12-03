import { ActiveUsers } from "../data/user.data";

class OpportunitiesRepository {
    private active: ActiveUsers[];

    constructor() {
        this.active = [];
    }

    set opportunities(newOpportunity: ActiveUsers) {
        const indexOfOpportunity = this.active.findIndex(
            item => item.opportunityId === newOpportunity.opportunityId
        );
        if (indexOfOpportunity < 0) {
            this.active.push(newOpportunity);
        } else {
            this.active[indexOfOpportunity].users = newOpportunity.users[0];
        }
    }

    hasOpportunity(opportunityId: string) {
        return this.active.some(items => items.opportunityId === opportunityId);
    }

    removeOpportunity(opportunityId: string) {
        const indexToRemove = this.active.findIndex(
            item => item.opportunityId === opportunityId
        );

        if (indexToRemove > -1) {
            this.active.splice(indexToRemove, 1)
        }
    }

    getUsersOfOpportunity(opportunityId: string) {
        const activeItem = this.active.find(list => list.opportunityId === opportunityId);

        if (activeItem) return activeItem.users;

        return [];
    }

    removeUserOfOpportunity(opportunityId: string, user: any) {
        const indexOfOpportunity = this.active.findIndex(
            item => item.opportunityId === opportunityId
        );

        if (indexOfOpportunity > -1) {
            this.active[indexOfOpportunity].removeUser(user);
        }
    }
}

export const opportunitiesRepository = new OpportunitiesRepository();