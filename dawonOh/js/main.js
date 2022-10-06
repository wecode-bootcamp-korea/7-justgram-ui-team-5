const addbtn = document.getElementsByClassName("addBtn");

const addbtnArr = Array.from(addbtn);

addbtnArr.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const input = document.getElementsByClassName("commentInput")[index];

    const commentList = document.getElementsByClassName("commentList")[index];

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
  });
});
