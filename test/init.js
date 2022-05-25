const { e2e, spec, request } = require("pactum");

describe("URL Visit healthcheck", () => {
  request.setBaseUrl("http://localhost:4000");
  let test_case = e2e("Hmmmmm");

  it("create user", async () => {
    await test_case;
    await spec().get("/").expectStatus(200);
  });

  it("clean up", async () => {
    await test_case.cleanup();
  });
});
