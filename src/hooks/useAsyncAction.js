import { useState } from 'react';

export default function useAsyncAction(action) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setError] = useState(false);

  const enhancedAction = async (param) => {
    setSubmitting(true);
    try {
      return await action(param);
    } catch (e) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return [
    enhancedAction,
    isSubmitting,
    isError,
  ];
}
