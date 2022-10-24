import { cockroachdb } from "../adapters/cockroachdb";

async function main() {
  const payload = Array.from(Array(50000).keys()).map((item: number) => {
    return {
      name: `${item}item`,
      email: `item${item}@item.com`,
    };
  });
  await cockroachdb.user.createMany({
    data: payload,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await cockroachdb.$disconnect();
  });
