// [MISSION 4]
// 게시글 적고 게시 버튼 클릭 시 댓글 달리도록
// 선택자
const commentList = document.getElementsByClassName("writtenComments"); // 댓글 넣는 영역
const commentButtonList = document.getElementsByClassName("btn"); //댓글 버튼
const commentInputList = document.getElementsByClassName("commentInput");

//배열로 바꿔주기
const commentArray = Array.from(commentList);
const commentButtonArray = Array.from(commentButtonList);
const commentInputArray = Array.from(commentInputList);

//게시버튼 클릭 및 댓글입력
commentButtonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    const input = document.getElementsByClassName("commentInput")[index]; //댓글 쓰는 영역
    const commentList =
      document.getElementsByClassName("writtenComments")[index]; //댓글 달리는 영역

    updateCommentListDom(input.value, commentList, "hyesuyeo22");
    input.value = "";
  });
});

commentInputArray.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const commentList =
        document.getElementsByClassName("writtenComments")[index]; //댓글 달리는 영역
      updateCommentListDom(input.value, commentList, "hyesuyeo22");
      input.value = "";
    }
  });
});

// [MISSION 5]
function updateCommentListDom(value, commentList, writer) {
  const commentCard = document.createElement("div");
  commentCard.classList.add("commentCard");

  const nicknameSpan = document.createElement("span"); //nickname 영역
  nicknameSpan.classList.add("highlight");
  nicknameSpan.textContent = writer;

  const contentSpan = document.createElement("span");
  contentSpan.textContent = value; //댓글 텍스트 영역

  commentCard.append(nicknameSpan, contentSpan);
  commentList.append(commentCard);
}

//fetch
const getCommentList = () => {
  fetch("./data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((comment) => {
        const commentList =
          document.getElementsByClassName("writtenComments")[comment.feedIndex];
        updateCommentListDom(comment.content, commentList, comment.nickname);
      });
    });
};

getCommentList();
