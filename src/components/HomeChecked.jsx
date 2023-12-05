

import React, { useState } from 'react';

function CheckCaixas() {
  // Estados para controlar os valores dos checkboxes
  const [debitoChecked, setDebitoChecked] = useState(false);
  const [creditoChecked, setCreditoChecked] = useState(true);

  // Funções para lidar com mudanças nos checkboxes
  const handleDebitoChange = () => {
    setDebitoChecked(!debitoChecked);
    setCreditoChecked(false); // Desmarca o checkbox de crédito ao marcar o débito
  };

  const handleCreditoChange = () => {
    setCreditoChecked(!creditoChecked);
    setDebitoChecked(false); // Desmarca o checkbox de débito ao marcar o crédito
  };

  return {
    debitoChecked,
    creditoChecked,
    handleDebitoChange,
    handleCreditoChange,
  };
}

export default CheckCaixas;