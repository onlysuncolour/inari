import http from 'http';
import { ISampleResp } from './interface';

export const pingChatGPT = (apiKey:string):Promise<ISampleResp> => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.openai.com',
      path: '/v1/models',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    };

    console.log('ping')
    
    http.get(options, res => {
      let data = '';
    
      res.on('data', chunk => {
        data += chunk;
      });
    
      res.on('end', () => {
        console.log(res)
        if (res.statusCode === 200) {
          resolve({ok: true})
        } else {
          resolve({ok: false})
        }
      });
    }).on('error', error => {
      console.log('error', error)
      resolve({ok: false, error: `${error.name} - ${error.message}`})
    });
  })
}

