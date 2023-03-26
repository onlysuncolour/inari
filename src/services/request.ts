import fetch from 'node-fetch'
import { IChatCompletionParam, IGptModelResp, IRequestParam, ISampleResp } from './interface';

const host = process.env.HOST || "https://api.openai.com"

export function request({url, apiKey, body, method}: IRequestParam): Promise<ISampleResp> {
  return new Promise((resolve) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: body && JSON.stringify(body),
    }).then(async response => {
      try {
        const data = await response.json();
        resolve({ok: true, data})
      } catch (error:any) {
        resolve({ok: false, error: `${error.name} - ${error.message}`})
      }
    }, error => {
      resolve({ok: false, error: `${error.name} - ${error.message}`})
    })
  })
}

export async function fetchListChatGPTModels({apiKey}: {apiKey: string}): Promise<IGptModelResp>{
  const resp = await request({
    url: `${host}/v1/models`,
    apiKey,
    method: 'GET',
  })
  if (resp.ok) {
    if (resp.data?.data?.length) {
      const models = resp.data.data
      return {ok: true, data: models}
    } else {
      return {ok: false, error: "No available models"}
    }
  } else {
    return resp
  }
}

export async function fetchChatCompletion({apiKey, body} : {apiKey: string, body: IChatCompletionParam}): Promise<any> {
  const resp = await request({
    url: `${host}/v1/chat/completions`,
    apiKey,
    body,
    method: 'POST',
  })
  if (resp.ok) {
    if (resp.data.choices) {
      return {ok: true, data: resp.data}
    } else {
      return {ok: false, error: "No return messages"}
    }
  } else {
    return resp
  }
}
