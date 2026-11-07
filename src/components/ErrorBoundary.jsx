import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#0F1511] text-text flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-2xl p-6 sm:p-8 shadow-card text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FEE2E2] dark:bg-[#381B1B] text-[#D93025] dark:text-[#F87171] flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h1 className="font-serif text-2xl font-bold text-text">
              Something went wrong
            </h1>

            <p className="text-xs sm:text-sm text-text-muted">
              An unexpected error occurred. Don't worry, your data saved on this device is safe.
            </p>

            {this.state.error?.message && (
              <div className="p-3 bg-[#FAF8F3] dark:bg-[#121B14] rounded-xl text-left overflow-x-auto text-[11px] font-mono text-text/80 border border-[#EBE6DA] dark:border-[#27382C]">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2D5A3C] hover:bg-[#234830] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#EFEBE0] dark:bg-[#1C281F] dark:hover:bg-[#243428] text-text border border-[#EBE6DA] dark:border-[#27382C] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              >
                <Home className="w-4 h-4 text-text/70" />
                <span>Back Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

