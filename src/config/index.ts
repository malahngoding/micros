import * as dotenv from 'dotenv';

const environment = dotenv.config();

export const hederaAccountID: string = environment.parsed.ACCOUNT_ID;
export const hederaPrivateKey: string = environment.parsed.PRIVATE_KEY;
