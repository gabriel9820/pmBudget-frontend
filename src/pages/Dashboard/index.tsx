import { useEffect, useState } from "react";

import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { useAppDispatch } from "../../store";
import { getAllTransactions } from "../../store/transactions/actions";

export const DashboardPage = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};
