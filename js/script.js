// --- VARIABLES ---
const commentReply = document.querySelectorAll(".comment__reply");

// ----------------------------------------------

// --- FUNCTIONS ---
function clickReply() {
  console.log("clicked");
}

// ----------------------------------------------

// --- EVENT LISTENERS ---
commentReply.forEach((reply) => {
  reply.addEventListener("click", (event) => {
    const parentComment = event.target.closest(".comment-container");

    // Assuming replyComment is the new element you want to insert
    const replyComment = document.createElement("div");
    replyComment.className = "answer-container";
    // replyComment.textContent = "This is a reply comment";

    // Insert the new element after the reference element
    parentComment.insertAdjacentElement("afterend", replyComment);

    replyComment.innerHTML = `<div class="border"></div>
    <div class="comment-container answer"></div>`;
  });
});

// ----------------------------------------------
