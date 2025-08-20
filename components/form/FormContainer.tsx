'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '../ui/use-toast';
import { type actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state && state.message) {
      toast({ description: state
        .message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
