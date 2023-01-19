import * as dotenv from "dotenv";

dotenv.config();

export const insteadToken: string = process.env.INSTEAD_TOKEN as string;
export const spacesURL: string = process.env.SPACES_URL as string;
export const microsPort: number = Number(process.env.MICROS_PORT as string); 
