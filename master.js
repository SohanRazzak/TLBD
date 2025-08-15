// Allowed domains
const _d = [
"techlegionbd.com","www.techlegionbd.com",
"sub.example.com",
"anotherdomain.com",
];

// Get current hostname
const _h = window.location.hostname;

// If domain not allowed -> block page
if (!_d.includes(_h)) {
    const o = document.createElement("div");
    o.style.cssText = `
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:#000;color:#fff;font-size:20px;
        display:flex;align-items:center;justify-content:center;
        z-index:999999;
    `;
    o.textContent = "⚠ Unauthorized domain";
    document.body.appendChild(o);
}
