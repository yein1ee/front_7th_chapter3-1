import { useCallback, useState } from 'react';

export const useManagementAlerts = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showSuccess = useCallback((message: string) => {
    setAlertMessage(message);
    setShowSuccessAlert(true);
  }, []);

  const showError = useCallback((error: unknown, fallbackMessage: string) => {
    const message = (error as any)?.message || fallbackMessage;
    setErrorMessage(message);
    setShowErrorAlert(true);
  }, []);

  const closeSuccess = useCallback(() => setShowSuccessAlert(false), []);
  const closeError = useCallback(() => setShowErrorAlert(false), []);

  return {
    showSuccessAlert,
    alertMessage,
    showErrorAlert,
    errorMessage,
    showSuccess,
    showError,
    closeSuccess,
    closeError,
  };
};


