(()=>{var e={860:e=>{"use strict";e.exports=require("express")},147:e=>{"use strict";e.exports=require("fs")}},r={};function t(s){var a=r[s];if(void 0!==a)return a.exports;var o=r[s]={exports:{}};return e[s](o,o.exports,t),o.exports}(()=>{const e=t(860),r=t(147),s=e();s.get("/api/gallery",((e,t)=>{const s=r.readFileSync("./data/gallery.json"),a=JSON.parse(s);t.send(a)})),s.get("/api/detail",((e,t)=>{const s=r.readFileSync("./data/detail.json"),a=JSON.parse(s);t.send(a)})),s.listen(3e3,(()=>{console.log("Server started on port 3000")}))})()})();