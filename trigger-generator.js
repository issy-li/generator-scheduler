console.log(new Date());
if ((new Date()).getDay() === 0) {
  const https = require('https');

  https.get(process.env.URL, (resp) => {
    if (resp.statusCode === 200) {
      console.info('successfully triggered generator');
    } else {
      console.error("failed to trigger generator");
    }
  }).on("error", (err) => {
    console.error("Error: " + err.message);
  });
} else {
  console.log("Not a Sunday, I'm going back to sleep :D")
}
