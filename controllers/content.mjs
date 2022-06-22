import fs from "fs";
import path from "path";
import fm from "gray-matter";

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = (input) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn) => (input) => input.map(fn);

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath);

const getAllFilesRecursively = (folder) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export const getContents = async (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  const lang = req.query.lang;
  const type = req.params.type;

  const files = getAllFilesRecursively(`./public/${type}/${lang}`);

  const prefixPaths = path.join(`./public/${type}/${lang}`);

  let allFrontMatter = [];
  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }
    const source = fs.readFileSync(file, "utf8");

    const { data } = fm(source);

    if (data.publish === true) {
      allFrontMatter.push({ ...data, slug: fileName.replace(".mdx", "") });
    }
  });

  allFrontMatter.sort((a, b) => {
    return b.id - a.id;
  });

  const responseObject = {
    messages: `Hello Articles`,
    status: `OK`,
    payload: {
      [type]: allFrontMatter,
      next: `/getContents/${type}?offset=${
        parseInt(offset) + parseInt(limit)
      }&limit=${limit}&lang=${lang}`,
    },
  };
  return res.send(responseObject);
};

export const getContentsPath = async (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;
  const lang = req.query.lang;
  const type = req.params.type;

  const files = getAllFilesRecursively(`./public/${type}/${lang}`);

  const prefixPaths = path.join(`./public/${type}/${lang}`);

  let allPaths = [];
  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }

    allPaths.push(fileName.replace(".mdx", ""));
  });

  const responseObject = {
    messages: `Hello Articles Path`,
    status: `OK`,
    payload: {
      path: allPaths,
      next: `/getContentsPath/${type}?offset=${
        parseInt(offset) + parseInt(limit)
      }&limit=${limit}&lang=${lang}`,
    },
  };
  return res.send(responseObject);
};
