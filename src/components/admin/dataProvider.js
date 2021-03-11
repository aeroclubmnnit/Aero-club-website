import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    options.headers.set("Access-Control-Expose-Headers", "Content-Range");
    const token = localStorage.getItem("jwtToken");
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(`${process.env.REACT_APP_SERVER}/api`, httpClient)