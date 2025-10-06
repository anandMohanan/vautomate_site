"use client";

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useTally } from '@/provider/TallyProvider';
import { Loader2 } from 'lucide-react';

interface TallyButtonProps extends ButtonProps {
  formId?: string;
  tallyOptions?: any;
  children: React.ReactNode;
}

export default function TallyButton({
  formId = 'w2Qv0e',
  tallyOptions = {},
  children,
  onClick,
  ...props
}: TallyButtonProps) {
  const { isLoading, openTallyForm } = useTally();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Open Tally form
    openTallyForm(formId, tallyOptions);
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
}
