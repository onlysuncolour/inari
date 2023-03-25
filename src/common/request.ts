type TRequestParam = {
  path: string;
  method: 'GET' | 'POST',
  payload?: any;
  body?: any
}
const request = ({
  path, method, payload, body
}: TRequestParam):Promise<any> => {
  return new Promise((res, rej) => {
    const url = payload ? `${path}?${new URLSearchParams(payload).toString()}` : path
    fetch(
      url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body)
      }
    ).then(resp => {
      resp.json().then(response => {
        res(response)
      }).catch(err => {
        rej(err)
      })
    }, err => {
      rej(err)
    })
  })
}

export const fetchHello = () => {
  return request({
    path: '/api/hello',
    method: 'GET'
  })
}

export const fetchCheckChatAvailable = () => {
  return request({
    path: '/api/chat/check-available',
    method: 'GET'
  })
}