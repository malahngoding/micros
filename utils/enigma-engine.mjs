export const enigmaEngine = (text) => {
  let warpedMessage;
  if (text.length % 2 === 1) {
    warpedMessage = text;
  } else {
    warpedMessage = text + "1";
  }
  let encryptedMessage = [];
  for (let index = 0; index < text.length; index++) {
    encryptedMessage.push(warpedMessage[(2 * (index + 1)) % text.length]);
  }
  console.log(encryptedMessage);
  return encryptedMessage.join("");
};
