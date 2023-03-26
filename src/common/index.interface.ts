export interface hello {}


export interface IChatConversion {
  role: string;
  content: string;
}

export interface IChatCompletionBody {
  model: string;
  messages: IChatConversion[];
  max_tokens: number;
}

export interface IChatCompletionChoiceResponse {
  index: number
  message: IChatConversion
  finish_reason: string
}
export interface IChatCompletionResponse {
  ok: boolean;
  data: {
    id: string
    object: string
    created: number
    choices: IChatCompletionChoiceResponse[]
    usage: {
      prompt_tokens: number
      completion_tokens: number
      total_tokens: number
    }
  }
}