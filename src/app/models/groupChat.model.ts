import { Message } from './message.model';
export class GroupChat {
    chatName: string;
    chatId: string;
    messages: Message[];
    users?: string[];
}