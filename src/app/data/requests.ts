import { Request } from '../interfaces/request';
export const newRequests: Request[] = [
    {
        id: 1,
        table: 'Porch 2',
        message: 'Assistance needed',
        status: 'new',
        assignee: 'Tory',
        assigneeId: 1
    },
    {
        id: 2,
        table: 'Bar 1',
        message: 'Assistance needed',
        status: 'new'
    },
    {
        id: 3,
        table: 'Dining room 4',
        message: 'Bill requested',
        status: 'new',
        assignee: 'Tory',
        assigneeId: 1
    },
    
]

export const progressRequests: Request[] = [
    {
        id: 4,
        table: 'Dining room 7',
        message: 'Assistance needed',
        status: 'progress',
        assignee: 'Valihandro',
        assigneeId: 2
    },
]

export const doneRequests: Request[] = [
    {
        id: 5,
        table: 'Dining room 2',
        message: 'Bill requested',
        status: 'done',
        assignee: 'Tory',
        assigneeId: 1
    },
]