import * as t from "tap";
import ky from "ky-universal";

const url = `http://localhost:8080`;

t.test("/api/home", async (t) => {
  const result = await ky(`${url}/api/home`).json();
  t.test("check result", async (t) => {
    t.equal(result.message, "Loud and Clear");
    t.equal(result.status, "OK");
  });
});
