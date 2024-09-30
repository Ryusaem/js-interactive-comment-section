// --- VARIABLES ---
const commentReplies = document.querySelectorAll(".comment__reply");

// ----------------------------------------------

// --- FUNCTIONS ---
function clickReply() {
  console.log("clicked");
}

// --- TARGET FUNCTIONS ---

function targetParent(event, parent) {
  const parentComment = event.target.closest(parent);
  return parentComment;
}

function targetPseudo(parent) {
  return parent.querySelector(".comment__user-name").textContent; // Get the pseudo of the user who commented
}

// --- CREATE FUNCTIONS ---

function createReplyContainerHTML(parents, pseudo, replyContainer) {
  replyContainer.classList.add("reply-container");

  replyContainer.innerHTML = `

  <textarea class="reply__form" placeholder="Add a comment...">@${pseudo
    .toLowerCase()
    .split(" ")
    .join("")} </textarea>

  <img src="./images/avatars/image-juliusomo.png" class="comment__avatar reply__avatar" alt="avatar"></img>

  <button type="submit" class="reply__submit-btn">REPLY</button>
`;

  // Append the reply Container AFTER the comment container
  parents.insertAdjacentElement("afterend", replyContainer);
}

function createReplyContainer(parents) {
  // Check if reply form already exists
  if (
    parents.nextElementSibling &&
    parents.nextElementSibling.classList.contains("reply-container")
  )
    return;

  const pseudo = targetPseudo(parents);
  const replyContainer = document.createElement("div");

  createReplyContainerHTML(parents, pseudo, replyContainer);

  // Button event listener
  const replyButton = replyContainer.querySelector(".reply__submit-btn");

  replyButton.addEventListener("click", (event) => {
    const textarea = replyContainer.querySelector(".reply__form");
    const replyText = textarea.value;

    // Perform the desired action with the captured data
    console.log("Reply Text:", replyText);
  });
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
    const parentComment = targetParent(event, ".comment-container");

    createReplyContainer(parentComment);
  });
});

// ----------------------------------------------

