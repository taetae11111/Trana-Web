
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isLeadModalOpen: boolean;
  isPolicyModalOpen: boolean;
  openLeadModal: () => void;
  closeLeadModal: () => void;
  openPolicyModal: () => void;
  closePolicyModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function Providers({ children }: { children: ReactNode }) {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const openLeadModal = () => setIsLeadModalOpen(true);
  const closeLeadModal = () => setIsLeadModalOpen(false);
  const openPolicyModal = () => setIsPolicyModalOpen(true);
  const closePolicyModal = () => setIsPolicyModalOpen(false);

  return (
    <ModalContext.Provider 
      value={{ 
        isLeadModalOpen, 
        isPolicyModalOpen, 
        openLeadModal, 
        closeLeadModal, 
        openPolicyModal, 
        closePolicyModal 
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a Providers component');
  }
  return context;
};
