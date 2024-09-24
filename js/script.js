// --- VARIABLES ---
const commentReplies = document.querySelectorAll(".comment__reply");

// ----------------------------------------------

// --- FUNCTIONS ---
function clickReply() {
  console.log("clicked");
}

function createForm(parents) {
  // Check if reply form already exists
  if (parents.querySelector("reply-container")) return;

  const replyForm = document.createElement("div");
  replyForm.classList.add("reply-container");

  replyForm.innerHTML = `

    <textarea class="reply__form" placeholder="Add a comment..."></textarea>

    <img src="./images/avatars/image-amyrobson.png" class="comment__avatar reply__avatar" alt="avatar"></img>

    <button type="submit" class="reply__submit-btn">REPLY</button>

`;

  // Append the reply form to the bottom of the comment container
  // parents.appendChild(replyForm);
  parents.insertAdjacentElement("afterend", replyForm);
}

function createReply(parents) {
  const replyContainer = document.createElement("div");
  replyContainer.className = "answer-container";

  replyContainer.innerHTML = `<div class="border"></div>
    <div class="comment-container answer"></div>`;

  parents.insertAdjacentElement("afterend", replyContainer);
}

// ----------------------------------------------

// --- EVENT LISTENERS ---
commentReplies.forEach((reply) => {
  reply.addEventListener("click", (event) => {
    const parentComment = event.target.closest(".comment-container");

    createForm(parentComment);
  });
});

// ----------------------------------------------
