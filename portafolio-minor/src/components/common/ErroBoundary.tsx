import { Component, type ErrorInfo, type ReactNode } from "react";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "../../types";

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary capturó: ", error, errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="error-boundary">
          <h1>Algo salió mal / Something went wrong</h1>
          <p>
            Ocurrió un error inesperado al renderizar el portafolio
            <br />
            An unexpected error occurred while rendering the portfolio
          </p>
          <button type="button" className="error-boundary-btn" onClick={() => window.location.reload()}>
            Recargar página / Reload page
          </button>
        </main>
      );
    }
    return this.props.children
  }
}
