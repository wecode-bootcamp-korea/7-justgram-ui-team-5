const http = require('http');
const express = require('express'); //express를 require

//회원들의 정보를 저장
let users = [
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
let posts = [
  {
    id: 1,
    title: '간단한 HTTP API 개발 시작!',
    content: 'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
    userId: 1,
  },
  {
    id: 2,
    title: 'HTTP의 특성',
    content: 'Request/Response와 Stateless!!',
    userId: 1,
  },
];

const listData = [];

// const listData = [
//   {
//     userID: 1,
//     userName: 'Rebekah Johnson',
//     postingId: 1,
//     postingTitle: '간단한 HTTP API 개발 시작!',
//     postingContent:
//       'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
//   },
//   {
//     userID: 2,
//     userName: 'Fabian Predovic',
//     postingId: 2,
//     postingTitle: 'HTTP의 특성',
//     postingContent: 'Request/Response와 Stateless!!',
//   },
//   {
//     userID: 3,
//     userName: 'new user 1',
//     postingId: 3,
//     postingTitle: '내용 1',
//     postingContent: 'sampleContent3',
//   },
//   {
//     userID: 4,
//     serName: 'new user 2',
//     postingId: 4,
//     postingTitle: '내용 2',
//     postingContent: 'sampleContent4',
//   },
// ];

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

//[mission1]:회원가입
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

//[mission2]:게시글 등록하기
app.post('/post', (req, res) => {
  const { userId, content, title } = req.body;

  const postData = {
    userId,
    content,
    title,
  };

  posts.push(postData);
  console.log(posts);

  res.status(201).json({ message: 'postCreated' });
});

//[mission3]:게시글 목록조회
//방법1->data형태를 직접 만들어서 , res.json()으로 보내주기
//방법2->array를 가공해서 형태에 맞는 데이터를 만든다
app.get('/list', (req, res) => {
  res.status(200).json({
    data: [
      {
        userID: 1,
        userName: 'Rebekah Johnson',
        postingId: 1,
        postingTitle: '간단한 HTTP API 개발 시작!',
        postingContent:
          'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
      },
      {
        userID: 2,
        userName: 'Fabian Predovic',
        postingId: 2,
        postingTitle: 'HTTP의 특성',
        postingContent: 'Request/Response와 Stateless!!',
      },
      {
        userID: 3,
        userName: 'new user 1',
        postingId: 3,
        postingTitle: '내용 1',
        postingContent: 'sampleContent3',
      },
      {
        userID: 4,
        serName: 'new user 2',
        postingId: 4,
        postingTitle: '내용 2',
        postingContent: 'sampleContent4',
      },
    ],
  });
});

//[mission4]:게시글 수정하기
app.patch('/modify', (req, res) => {
  //1.1번이라는 숫자를 변수에 할당
  //2.post라는 배열에서, id가 1번인 객체를 찾음
  //3."content"를 "node"로 바꿔준다
  //4.send response to client

  const id = 1;
  for (let i in posts) {
    const posting = posts[i];
    if (posting.id === 1) {
      posting.content = 'node';
      console.log(posts);
    }
  }

  res.status(200).json({ data: posts });
});

//[mission5]:게시글삭제하기
// app.delete('/remove', (req, res) => {
//   const newPosts = [
//     {
//       id: 1,
//       title: '간단한 HTTP API 개발 시작!',
//       content:
//         'Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.',
//       userId: 1,
//     },
//     {
//       id: 2,
//       title: '갑자기 내이름',
//       content: 'Request/Response와 Stateless!!',
//       userId: 1,
//     },
//   ];
//   for (let i in newPosts) {
//     for (let i in posts) {
//       if (newPosts[i] !== posts[i]) {
//         res.status(200).json({ message: 'postingDeleted' });
//       }
//     }
//   }
// });

//[mission6]:유저와 게시글 조회하기

//HTTP서버객체생성
const server = http.createServer(app);

try {
  server.listen(8000, () => {
    console.log('server is listening on PORT 8000');
  });
} catch (error) {
  console.log(err);
}
