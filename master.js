// Allowed domains
const _d = [
// Original Site
"techlegionbd.com",
"www.techlegionbd.com",
// Allowed Domain
];

// Get current hostname
const _h = window.location.hostname;

// If domain not allowed -> block page
if (_d.includes(_h) === false) {
    const o = document.createElement("div");
    o.style.cssText = `
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:#000;color:#fff;font-size:24px;
        display:flex;align-items:center;justify-content:center;
        z-index:999999;overflow-y:hidden!important;
    `;
    o.textContent = "⚠ Unauthorized domain";
    document.body.appendChild(o);
}
