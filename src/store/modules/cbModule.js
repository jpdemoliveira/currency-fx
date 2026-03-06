import axios from "axios";
import { apiResponseCodes } from "@/utils/enums";

export const cbModule = {
  namespaced: true,
  state: {},
  actions: {
    //#region [GET (Currency List)]
    async getCurrencyList({ commit }, params) {
      return await axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}/currencies`, {
          params: {
            api_key: process.env.VUE_APP_API_KEY,
            type: params.type,
          },
          timeout: 180000,
        })
        .then(async (response) => {
          console.log(response);
          if (response.status == apiResponseCodes.success) {
            return response;
          }
        })
        .catch((e) => {
          throw e;
        });
    },
    //#endregion [GET (Currency List)]
  },
};
