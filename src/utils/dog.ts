/* eslint-disable no-console */
import pkg from 'chalk';

const {
  bold,
  underline,
  bgWhite,
  bgYellow,
  black,
  yellow,
  red,
  bgRedBright,
  bgBlueBright,
  blue,
  white,
} = pkg;

export const watchDog = {
  info: (message: string) => {
    console.info(
      `${bgWhite(black(`[Watch Dogs]`))} ${bold(
        underline(`info`),
      )} ${` `}: ${message}`,
    );
  },
  warn: (message: string) => {
    console.warn(
      `${bgYellow(black(`[Watch Dogs]`))} ${bold(
        underline(yellow(`warn`)),
      )} ${` `}: ${message}`,
    );
  },
  debug: (message: string, item: any) => {
    console.debug(
      `${bgBlueBright(white(`[Watch Dogs]`))} ${bold(
        underline(blue(`debug`)),
      )} : ${message}`,
    );
    console.dir(item);
  },
  error: (message: string | Error) => {
    console.error(
      `${bgRedBright(white(`[Watch Dogs]`))} ${bold(
        underline(red(`error`)),
      )} : ${message}`,
    );
  },
};
