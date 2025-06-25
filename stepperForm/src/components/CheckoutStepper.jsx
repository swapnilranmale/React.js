import React, { useState } from "react";

function CheckoutStepper({ stepConfig = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  if (!stepConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepConfig.length) {
        return setIsComplete(true);
      } else {
        return prevStep + 1;
      }
    });
  };

  const ActiveComponent = stepConfig[currentStep - 1].Component;
  return (
    <>
      <div className="stepper">
        {stepConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              }${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div className="progress-bar">
          <div className="progress "></div>
        </div>
      </div>
      <ActiveComponent />

      {!isComplete && (
        <button onClick={handleNext}>
          {" "}
          {currentStep === stepConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default CheckoutStepper;
