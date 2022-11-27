import React from "react";

import LoadingOverlayView from "./view";

type Props = {
  isLoading: boolean;
};

const LoadingOverlayContainer = ({ isLoading }: Props) => {
  return <LoadingOverlayView isLoading={isLoading} />;
};

export default LoadingOverlayContainer;
