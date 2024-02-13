import { ICartItem, MenuItem } from "@/types";
import { create } from "zustand";

export type ModalType =
  | "cart"
  | "schedule"
  | "closeTime"
  | "menuItemDetails"
  | "checkOut"
  | "editCartItem"
  | "paymentConfirmation";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: MenuItem) => void;
  onClose: () => void;
  data?: MenuItem | ICartItem | null;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
