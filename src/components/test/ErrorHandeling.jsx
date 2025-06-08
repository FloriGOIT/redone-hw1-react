import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    // Catch errors in any components below and re-render with fallback UI
    this.setState({
      hasError: true,
      error: error,
      errorInfo: info,
    });

    // You could also log error messages to an error reporting service here
    console.error('Caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export class BuggyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { shouldCrash: false };
        }
      
        handleClick = () => {
          this.setState({ shouldCrash: true });
        };
      
        render() {
          if (this.state.shouldCrash) {
            throw new Error('Oops! This component crashed.');
          }
      
          return (
            <div>
              <p>This component is working fine.</p>
              <button onClick={this.handleClick}>Crash this component</button>
            </div>
          );
        }
      }
