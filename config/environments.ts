import * as dotenv from "dotenv";

dotenv.config();

export const insteadToken: string = process.env.INSTEAD_TOKEN as string;
export const spacesURL: string = process.env.SPACES_URL as string;
export const microsPort: number = Number(process.env.MICROS_PORT as string);
export const detaProjectKey: string = process.env.DETA_PROJECT_KEY as string;
export const detaProjectID: string = process.env.DETA_PROJECT_ID as string;
export const axiomToken: string = process.env.AXIOM_TOKEN as string;
