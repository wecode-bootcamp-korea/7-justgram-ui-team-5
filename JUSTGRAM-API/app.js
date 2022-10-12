const http = require('http');
const express = require('express'); //express를 require

//회원들의 정보를 저장
const users = [
  {
    id: 1,
    name: 'Rebekah Johnson',
    email: 'Glover12345@gmail.com',
    password: '123qwe',
  },
  {
    id: 2,
    name: 'Fabian Predovic',
    email: 'Connell29@gmail.com',
    password: 'password',
  },
];
//회원들이 작성한 게시물을 저장
const posts = [
  {
    id: 1,
    name: 'Rebekah Johnson',
    email: 'Glover12345@gmail.com',
    password: '123qwe',
  },
  {
    id: 2,
    name: 'Fabian Predovic',
    email: 'Connell29@gmail.com',
    password: 'password',
  },
];

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

//회원가입
//1.app에 회원가입하는 url등록
app.post('/join', (req, res) => {
  //2.name,email,password received from 요청(request)

  const { email, password, name } = req.body;

  //3.users 배열에 고객추가
  const userData = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(userData);

  console.log(users);

  //4.응답(response)to client
  res.json({ message: 'USER_CREATED' });
});

app.post('/post', (req, res) => {
  //2.name,email,password received from 요청(request)

  const { email, password, name } = req.body;

  //3.users 배열에 고객추가
  const postData = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  posts.push(postData);

  console.log(posts);

  //4.응답(response)to client
  res.json({ message: 'postCreated' });
});

const server = http.createServer(app);

try {
  server.listen(8000, () => {
    console.log('server is listening on PORT 8000');
  });
} catch (error) {
  console.log(err);
}
