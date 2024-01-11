"use client";

import { useState, useEffect } from "react";

import SettigsModal from "../modals/settings-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettigsModal />
    </>
  );
};

export default ModalProvider;
