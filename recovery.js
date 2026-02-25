/* Ad Reovery */
const recoveryMsg = `<ins class="popSc text-decoration-none">
    <div class="popBo border-warning border border-3">
      <svg style="stroke:none;fill:currentColor!important" viewBox="0 0 24 24">
        <path d="M12.2 9L10.2 7H13c1.1 0 2 .9 2 2v2.8l-2-2V9h-.8zM23 9V7h-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v2h-2.8l2 2h.8c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V9h4zM22.1 21.5l-1.3 1.3-6.4-6.4c-.3.3-.8.6-1.4.6H9V10.9L7 8.9V17H5v-4H3v4H1V9c0-1.1.9-2 2-2h2.1L1.1 3l1.3-1.3L22.1 21.5zM5 9H3v2h2V9zM13 14.9l-2-2v2.1h2v-.1z"/>
      </svg>
      <h2>Ads blocker detected!</h2>
      <div class="popCo">
        <p>We have detected that you are using an adblocking DNS or plugin in your browser.<br/><br/>
        While ads might be a little annoying, they help us keep the site running. We request you to disable Ad Block or use a different browser.</p>
      </div>
    </div>
  </ins>`;
const blockScreen = () => {
  document.body.insertAdjacentHTML("afterbegin", recoveryMsg);
  document.body.classList.add("no-scroll");
};

setTimeout(() => {
  fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
    method: "HEAD"
  })
    .then((r) => {
      console.warn(r.ok && "Ads Request Successful");
      hasAds = document.body.getElementsByClassName("adsbygoogle");
      hiddenAds = true;
      for(i=0; i<hasAds.length; i++){
        if(hasAds[i].checkVisibility() != false){
          hiddenAds = false;
        }
      }
		console.log(hiddenAds)
      if (hasAds.length < 1 || hiddenAds == true) {
        blockScreen();
      }
    })
    .catch(() => {
      blockScreen();
    });
}, 3500);
