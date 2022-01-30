import { generateSlug } from "random-word-slugs";
import randomstring from "randomstring";

export const getFlashCardRanking = async (_, res) => {
  const list = [];
  [1, 2, 3, 4, 5, 6].map((item) => {
    list.push({
      rank: item,
      userName: generateSlug(2, { format: "title" }),
      avatar: `${item} ${new Date()}`,
      score: `${randomstring.generate({
        length: 4,
        charset: "numeric",
      })}`,
    });
  });
  const responseObject = {
    messages: `Hello FlashCard List`,
    status: `OK`,
    payload: {
      ranks: list,
    },
  };
  return res.send(responseObject);
};
