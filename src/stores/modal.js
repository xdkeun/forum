import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    showModal: false,
    modalContent: "",
  }),
  actions: {
    open(modalContent) {
      this.showModal = true;
      this.modalContent = modalContent;
    },
    close() {
      this.showModal = false;
      this.modalContent = "";
    },
  },
});
