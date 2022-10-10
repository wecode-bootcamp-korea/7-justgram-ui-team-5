const addbtn = document.getElementsByClassName("addBtn");
const addbtnArr = Array.from(addbtn);

const commentInputList = document.getElementsByClassName("commentInput");
const commnetInputListArr = Array.from(commentInputList);

// 댓글 추가 기능 함수
function addComment(value, commentList, writer) {
  const nickname = document.createElement("span");
  nickname.className = "writer";
  nickname.textContent = writer;

  const commentP = document.createElement("p");
  commentP.className = "commentP";

  const content = document.createElement("span");
  content.className = "content";

  content.textContent = value;

  commentP.append(nickname, content);
  commentList.append(commentP);
}

//"게시" 버튼 클릭 시 댓글 게시
addbtnArr.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const input = document.getElementsByClassName("commentInput")[index];

    const commentList = document.getElementsByClassName("commentList")[index];
    if (input.value.replace(/ /g, "") != "") {
      addComment(input.value, commentList, "dawonOh");
      input.value = "";
    } else if (input.value.replace(/ /g, "") === "") {
      input.value = "";
      input.focus();
    }
  });
});

//엔터키 눌렀을 시 댓글 게시
commnetInputListArr.forEach((input, index) => {
  input.addEventListener("keydown", () => {
    const input = document.getElementsByClassName("commentInput")[index];

    const commentList = document.getElementsByClassName("commentList")[index];
    if (event.key === "Enter" && input.value.replace(/ /g, "") != "") {
      addComment(input.value, commentList, "dawonOh");
      input.value = "";
    } else if (input.value.replace(/ /g, "") === "") {
      input.value = "";
      input.focus();
    }
  });
});

//[Mission 5] feed mock data fetch 후 댓글 출력
function getCommentList() {
  fetch("./data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      json.forEach((comment) => {
        const commentList = document.getElementsByClassName("commentList")[0];

        const writer = document.createElement("span");
        writer.className = "writer";
        writer.textContent = comment.writer;

        const commentP = document.createElement("p");
        commentP.className = "commentP";

        const content = document.createElement("span");
        content.className = "content";
        content.textContent = comment.comment;

        commentP.append(writer, content);
        console.log(commentP);
        commentList.append(commentP);
      });
    });
}

getCommentList();
