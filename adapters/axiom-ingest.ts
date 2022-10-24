// curl -X 'POST' ''   -H 'Authorization: Bearer xaat-7be763cd-2ac8-4a91-97fe-5bc6e256c1c6'   -H 'Content-Type: application/x-ndjson'   -d '{ "path": "/download", "method": "GET", "duration_ms": 231, "res_size_bytes": 3012 }'

import axios from "axios";
import { axiomToken } from "../config/environments";

const clientAxiom = axios.create({
  baseURL: "https://cloud.axiom.co/api/v1/datasets/micros/ingest",
  headers: { Authorization: axiomToken },
});

export const putEventOnAxiom = async (): Promise<any> => {
  clientAxiom
    .post("/", [
      {
        time: "2021-23-04302:11:23.222Z",
        data: { key1: "value1", key2: "value2" },
      },
    ])
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
};
