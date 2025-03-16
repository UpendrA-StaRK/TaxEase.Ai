const axios = require("axios").default;
const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/ocr/ocr_async",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFkODY4MzEtNzZjMS00NmU2LTliMzAtOWI1NTc4OGFjYzkzIiwidHlwZSI6ImFwaV90b2tlbiJ9.1Rftx0U-YVYRS3Ng8rn1f-m9Is7QumWRsXLWq8ptpiA",
  },
  data: {
    providers: "amazon",
    file_url: "🔗 URL of your image",
  },
};
axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
