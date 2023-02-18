import Keyv from 'keyv';
import { ChatGPTAPI, GetMessageByIdFunction, openai, UpsertMessageFunction, FetchFn } from "chatgpt";
export interface AccountWithUserInfo {
  email: string;
  apiKey: string;
  /** @defaultValue `'https://api.openai.com'` **/
  apiBaseUrl?: string;
  /** @defaultValue `undefined` **/
  apiReverseProxyUrl?: string;
  /** @defaultValue `false` **/
  debug?: boolean;
  completionParams?: Partial<openai.CompletionParams>;
  /** @defaultValue `4096` **/
  maxModelTokens?: number;
  /** @defaultValue `1000` **/
  maxResponseTokens?: number;
  /** @defaultValue `'User'` **/
  userLabel?: string;
  /** @defaultValue `'ChatGPT'` **/
  assistantLabel?: string;
  messageStore?: Keyv;
  getMessageById?: GetMessageByIdFunction;
  upsertMessage?: UpsertMessageFunction;
  fetch?: FetchFn;
}

// Account will be one in the session token or email and password
export type IAccount = AccountWithUserInfo;

export interface IChatGPTItem {
  chatGpt: ChatGPTAPI;
  account: IAccount;
}
export interface IConversationItem {
  conversation: ChatGPTAPI;
  account: IAccount;
  conversationId?: string;
  messageId?: string;
}

export interface IConfig {
  chatGPTAccountPool: IAccount[];
  chatGptRetryTimes: number;
  chatPrivateTiggerKeyword: string;
  openAIProxy?: string;
  clearanceToken: string;
  userAgent: string;
}
