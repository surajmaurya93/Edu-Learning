import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react';

const BuyCourseButton = ({ courseId }) => {
  const isLoading = false;

  return (
    <Button
      disabled={isLoading}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
};

export default BuyCourseButton
