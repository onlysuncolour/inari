// import https from 'https';
import fetch from 'node-fetch'
import { ISampleResp } from './interface';

export const pingChatGPT = (apiKey:string):Promise<ISampleResp> => {
  return new Promise((resolve) => {
    console.log('pingChatGPT', apiKey)
    fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      }
    }).then(async response => {
      const data = await response.json();
      console.log(data)
      if (response.status === 200) {
        resolve({ok: true})
      } else {
        resolve({ok: false})
      }
    }, (error:Error) => {
      console.log('error', error)
      resolve({ok: false, error: `${error.name} - ${error.message}`})
    })
    
  })
}

