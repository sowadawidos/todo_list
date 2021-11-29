import axios from "axios";

const API_URL =
  "https://sheet.best/api/sheets/c55a2e96-a82e-4958-a5a1-81375fca3ef4";

export const fetchData = (method, body = null, path = "") => {
  return axios({
    method: method,
    url: API_URL + path,
    data: body ? {...body} : undefined
  });
};
