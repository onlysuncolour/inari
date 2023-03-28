import { IChatCompletionDataResp, IGptModel } from "./interface"

export const getMockModelList = ():IGptModel[] => {
  return [
    {
      id: 'string',
      object: 'string',
      created: 1,
      owned_by: 'string',
      permission: [],
      root: 'string',
      parent: ""
    }, {
      id: 'string',
      object: 'string',
      created: 1,
      owned_by: 'string',
      permission: [],
      root: 'string',
      parent: ""
    }
  ]
}

export const getMockCompletions = ():IChatCompletionDataResp => {
  return {
    "id": "chatcmpl-id",
    "object": "chat.completion",
    "created": 1,
    "model": "gpt-3.5-turbo-0301",
    "usage": {
        prompt_tokens: 9,
        completion_tokens: 9,
        total_tokens: 18
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "Hello! How can I assist you today?"
            },
            "finish_reason": "stop",
            "index": 0
        }
    ]
  }
}