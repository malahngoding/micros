const axios = require("axios");

const URL = "http://localhost:4000";

test("Home URL visitor", async () => {
  const res = await axios(`${URL}/`);
  expect(res.data.messages).toBe("Hello Future");
});
