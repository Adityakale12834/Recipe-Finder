import React from "react";
import Loading from "./Loading";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (<><Loading />
                <div>
                    Something Went Wrong
                </div>
            </>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
