const fs = require('fs');
try {
  fs.copyFileSync(
    "C:\\Users\\Sanket Pathare\\.gemini\\antigravity-ide\\brain\\dde2fd07-ff21-4656-8c30-6b7e6359b878\\softivra_team_about_1782037248271.png",
    "d:\\Development\\nextdigit\\nextdigit\\public\\softivra_team_about.png"
  );
  console.log("SUCCESS");
} catch (e) {
  console.error("ERROR:", e);
}
