const http = require('http'); //http를 import(=require)
const { sendPosts } = require('./sendPosts'); //sendPost를 import

//http.createServer라는 메소드는 인자로 또 다른 함수를 받는다
//첫번째 인자는 request정보가 담긴 객체,두번째 인자는 response객체
const server = http.createServer((req, res) => {
  const { url, method } = req;
  res.setHeader('Content-Type', 'application/json'); //응답의 header을 application/json형태로 세팅

  if (url === '/') return res.end(JSON.stringify({ message: '/ endpoint' }));
  if (url === '/signup' && method === 'POST')
    return res.end(JSON.stringify({ message: '회원가입완료' }));
  if (url === '/login' && method === 'POST')
    return res.end(JSON.stringify({ message: '로그인완료' }));
  if (url === '/products' && method === 'GET') return sendPosts(res);

  res.end(
    JSON.stringify({ message: 'this response answers to every request' })
  );
});

server.listen(8000, () => {
  //listen함수는 인자로 포트 번호와 콜백함수를 받는다(포트번호는 서버를 연다는 의미)
  console.log('server is running on PROT 8000');
});
