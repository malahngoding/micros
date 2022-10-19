import { Deta } from "deta";
import { detaProjectKey } from "../config/environments";

const deta = Deta(detaProjectKey);

export const config = deta.Base("config");
