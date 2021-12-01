import { Request, Response } from "express";
import { opportunitiesRepository } from "../repositories/activeUser.repository";

export function getActiveUsers(req: Request, res: Response): any {
    const { opportunityId } = req.params;

    if (!opportunityId) res.status(400).json({ "error": "Opportuniy is not valid!" })

    const users = opportunitiesRepository.getUsersOfOpportunity(opportunityId);

    return res.status(200).json({ users });
}