import { defineStore } from "pinia";
import axios from "axios";
const url = "http://localhost:3000";

export const useHistoryStore = defineStore("history", {
  state: () => ({
    recordData: [],
  }),
  actions: {
    async fetchHistory() {
      try {
        let data = await axios.get(`${url}/history`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.recordData = data.data;
        console.log(this.recordData);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
});
