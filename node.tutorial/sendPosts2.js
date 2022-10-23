const sendPosts2 = (req, res) => {
  res.json({
    //express 덕분에 JSON.stringify함수를 사용할 필요없이
    //response객체의 json메소드를 활용
    products: [
      {
        id: 1,
        title: 'node',
        description: 'node.js is awesome',
      },
      {
        id: 2,
        title: 'express',
        description: 'express is a server-side framework for node.js',
      },
    ],
  });
};

module.exports = { sendPosts2 }; //withExpress.js에서 사용하기 위해 모듈로 보낸다
