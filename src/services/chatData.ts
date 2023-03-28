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

  setAvailable(value:boolean) {
    this.available = value;
  }

  getClientData() {
    return {
      available: this.available,
      error: this.error,
      models: this.models,
    }
  }

}
export const chatData = new ChatDataClass()