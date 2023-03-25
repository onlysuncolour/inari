import { Configuration, OpenAIApi } from "openai";
import { ISampleResp } from "./interface";
import { pingChatGPT } from "./request";

class ChatService {
  openAi!: OpenAIApi;
  apiKey!: string;
  orgKey!: string;
  available!: boolean;
  error?: string;
  constructor() {
    this.generateChatInstance();
  }
  async generateChatInstance () {
    const { API_KEY, ORG_KEY } = process.env;
    this.apiKey = API_KEY as string;
    this.orgKey = ORG_KEY as string;
    const configuration = new Configuration({
      organization: ORG_KEY,
      apiKey: API_KEY,
    });
    this.openAi = new OpenAIApi(configuration);
    // const result = (await this.checkChatAvailable());
    // this.available = result.ok
    // this.error = result.error
  }
  async checkChatAvailable ():Promise<ISampleResp> {
    let result: ISampleResp = {ok: true};
    if (!this.apiKey || !this.orgKey) {
      result = {ok: false, error: 'No API key or organization key'}
    }
    if (result.ok) {
      result = await pingChatGPT(this.apiKey);
    }
    this.available = result.ok
    this.error = result.error
    return result
  }
}
const chatService = new ChatService();
export default chatService;