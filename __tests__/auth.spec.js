const axios = require("axios");

const URL = "http://localhost:4000";

test("Auth URL visitor", async () => {
  const res = await axios.post(`${URL}/issueToken`, {
    identification: "ciphertext",
    provider: "PROVIDER",
    name: "Name",
    email: "Email",
  });
  expect(res.data.messages).toBe("Token issued");
  expect(res.data.payload.token).toMatch("instead_");
});
