// import { Configuration, OpenAIApi } from "openai";
import chatData from "./chatData";
import { IChatServiceResp, IChatCompletionParam, IGptModelResp, ISampleResp } from "./interface";
import { fetchChatCompletion, fetchListChatGPTModels } from "./request";

export default class ChatService {
  constructor() { }
  static getResult (result: ISampleResp): IChatServiceResp {
    return {ok: result.ok, data: chatData.getClientData()}
  }
  static async getChatGPTModels (): Promise<IGptModelResp> {
    const result = await fetchListChatGPTModels({apiKey: chatData.apiKey});
    if (result.ok) {
      chatData.models = result.data
    } else {
      chatData.models = []
    }
    return result
  }
  static async checkChatAvailable(): Promise<IChatServiceResp> {
    let result: IGptModelResp = {ok: true};
    if (!chatData.apiKey) {
      result = {ok: false, error: 'No API key or organization key'}
    }
    if (result.ok) {
      result = await this.getChatGPTModels();
    }
    chatData.available = result.ok
    chatData.error = result.error
    return this.getResult(result)
  }
  static async makeChatCompletion(body: IChatCompletionParam) {
    const result = await fetchChatCompletion({apiKey: chatData.apiKey, body})
    return result
  }
}