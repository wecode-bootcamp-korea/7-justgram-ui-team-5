const http = require('http');
const express = require('express'); //express를 require
const { sendPosts2 } = require('./sendPosts2');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '/endpoint' });
});

app.post('/signup', (req, res) => {
  res.json({ message: '회원가입완료' });
});
app.get('/products', sendPosts2);
//첫번째 인자에는 endPoint url을 기입하고
//각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣는다

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('server is listening on PORT 8000');
});
