const addbtn = document.getElementsByClassName("addBtn");

const addbtnArr = Array.from(addbtn);

addbtnArr.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const input = document.getElementsByClassName("commentInput")[index];

    const commentList = document.getElementsByClassName("commentList")[index];

    if (input.value.replace(/ /g, "") != "") {
      const writer = document.createElement("span");
      writer.className = "writer";
      writer.textContent = "dawon_Oh";

      const commentP = document.createElement("p");
      commentP.className = "commentP";

      const content = document.createElement("span");
      content.className = "content";

      content.textContent = input.value;

      commentP.append(writer, content);
      console.log(commentP);
      commentList.append(commentP);

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
