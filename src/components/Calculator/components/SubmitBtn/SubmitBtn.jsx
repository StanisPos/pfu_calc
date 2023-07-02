import React from "react";
import { Button } from "react-bootstrap";
import { usePCFFormContext } from "@/components/Calculator/components/PCFFormProvider";

const SubmitBtn = () => {
  return (
    <Button type="submit" variant="primary" size="lg">
      Рассчитать
    </Button>
  );
};

export default SubmitBtn;
