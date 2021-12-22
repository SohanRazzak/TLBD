/* <button class="ex-link" data-href="link" onclick=openModal();>লিংক</button> */
// Use this markup
const modalButton = document.querySelector(".ex-link");
const extra = document.createElement("div");
const modalhtml = `<div class="modal-header">
&#128279; আপনি আমাদের সাইট ছেড়ে যাচ্ছেন!
<span class="close-modal" onclick="closeModal()">&times</span>
</div>
<div class="modal-body">
এটি একটি এক্সটারনাল সাইটের লিংক
<br/><br/><div class="show-link"></div><br/>
লিংকে যেতে নিচের যান বাটনে ক্লিক করুন। আপনি যদি পুরো পোষ্ট না পড়ে থাকে,তাহলে থাকুন বাটনে ক্লিক করে ফিরে আসতে পারবেন। আমাদের অনান্য পোষ্ট পড়তে ভুলবেন না। ধন্যবাদ 😀
</div>
<div class="modal-footer">
<button class="close-modal" onclick="closeModal()">থাকুন </button>
<button class="confirm-modal">যান</button>
</div>`;
var openModal;
if (modalButton)
  { 
  openModal = function () {
  let getlink = event.currentTarget.dataset.href;
  extra.classList.add("modal-content");
  extra.innerHTML = modalhtml;
  document.body.appendChild(extra);
  document.querySelector(".show-link").innerHTML = "(" + getlink + ")";  
  document.querySelector(".confirm-modal").addEventListener("click", (e) => {
    window.open(getlink, "_blank");
    extra.remove();
  });  
  };
}
function closeModal() {
  extra.remove();
}
