import { IGptModel } from "./interface";

class ChatDataClass {
  apiKey!: string;
  available!: boolean;
  error?: string;
  models?: IGptModel[];
  
  constructor () {
    const { API_KEY } = process.env;
    this.apiKey = API_KEY as string;
  }

  getClientData() {
    return {
      available: this.available,
      error: this.error,
      models: this.models,
    }
  }

}

const chatData = new ChatDataClass()
export default chatData;