import React, { Component, ReactNode } from "react";
import ErrorPage from "./ErrorPage";

interface ErrorBounderProps {
    children: ReactNode;
}

interface ErrorBounderState {
    error: Error | null;
}

export class ErrorBounder extends Component<ErrorBounderProps, ErrorBounderState> {
    constructor(props: ErrorBounderProps) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error: Error) {
        this.setState({
            error: error
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorPage />;
        }
        return this.props.children;
    }
}
