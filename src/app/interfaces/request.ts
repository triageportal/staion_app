export interface Request {
    id: number,
    table: string,
    message: string,
    status?: string,
    assignee?: string,
    assigneeId?: number,
}
