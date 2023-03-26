export interface ISampleResp {
  ok: boolean;
  error?: string;
  msg?: string;
  data?: any;
}

export interface IGptModel {
  id: string,
  object: string,
  created: number,
  owned_by: string,
  permission: string[],
  root: string,
  parent: any
}
export interface IGptModelResponse {
  object: string;
  data: IGptModel[]
}

export interface IGptModelResp {
  ok: boolean;
  error?: string;
  data?: IGptModel[]
}

export interface IRequestParam {
  url: string;
  apiKey: string;
  body?: any;
  method: 'GET' | 'POST';
}

export interface IChatService {
  available: boolean;
  error?: string;
  models?: IGptModel[]
  [propName: string]: any
}
export interface IChatServiceResp {
  ok: boolean;
  data?: IChatService;
  error?: string
}

export interface IChatCompletionMessage {
  role: string;
  content: string;
}
export interface IChatCompletionParam {
  model: string;
  messages: IChatCompletionMessage[];
  max_tokens: number;
}