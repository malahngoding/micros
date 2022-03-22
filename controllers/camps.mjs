export const getCampsList = async (req, res) => {
  const lang = req.query.lang;
  const courses =
    lang === "en" ? "introduction-to-programming" : "pengenalan-pemrograman";
  const slug =
    lang === "en" ? "01-the-adventure-begins" : "01-petualangan-dimulai";

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      language: lang,
      courses: courses,
      slug: slug,
    },
  };
  return res.send(responseObject);
};

export const getCampsProgress = async (_, res) => {
  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};
