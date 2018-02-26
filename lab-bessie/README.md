# Lab 07 - Vanilla HTTP Servers

##### GET: `/`
For **GET** requests made to `/`, the server should respond with the following:
* a header containing `Content-Type: text/plain`
* a status code of **200**
* a response with the string "hello from my server!"

##### GET: `/cowsay?text={message}`
For **GET** requests made to `/cowsay`, the server should respond with the following:
* a header containing `Content-Type: text/plain`
* if the querystring `text=message` is set, respond with:
  * status code of **200**
  * a response body that includes the value returned from `cowsay.say({ text: <querystring text> })`
* if the querystring `text=message` is **not** set, respond with:
  * status code **400**
  * a body including the value returned from `cowsay.say({ text: 'bad request' })`

##### POST: `/cowsay`
For **POST** requests made to `/cowsay`, the server should respond with the following:
* a header containing `Content-Type: text/plain`
* if the JSON string `{text: message}` is set in the body, respond with:
  * status code of **200**
  * a response body including the value returned from `cowsay.say({ text: <querystring text> })`
* if the JSON string `{text: message}` is **not** set in the body, respond with:
  * status code **400**
  * a body including the value returned from `cowsay.say({ text: 'bad request' })`