"use client";

import React, { useRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "../lib/store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
