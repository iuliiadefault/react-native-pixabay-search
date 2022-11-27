import React from "react";

import ErrorBoundaryView from "./view";

type State = {
  hasError: boolean;
};

class ErrorBoundaryContainer extends React.Component<
  Record<string, Element>,
  State
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryView />;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
