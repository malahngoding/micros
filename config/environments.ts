import * as dotenv from 'dotenv';

dotenv.config();

/*
 SECRET KEY
*/
export const insteadToken: string = (process.env.INSTEAD_TOKEN ||
	'devTV3xusS2wxicxr2IArskVdbAO7OYMXpA') as string;

/*
INSTEAD ECOSYSTEM
*/
export const spacesURL: string = (process.env.SPACES_URL || 'http://localhost') as string;
export const spacesPORT: number = Number(process.env.SPACES_PORT) || 3500;
export const microsURL: string = (process.env.MICROS_URL || 'http://localhost') as string;
export const microsPort: number = Number(process.env.MICROS_PORT) || 4000;
export const decaysURL: string = (process.env.DECAYS_URL || 'http://localhost') as string;
export const decaysPort: number = Number(process.env.DECAYS_PORT) || 5000;
export const filamentsURL: string = (process.env.FILAMENTS_URL || 'http://localhost') as string;
export const filamentsPort: number = Number(process.env.FILAMENTS_PORT) || 4444;
