import React from "react";
import './style/container.css';
import Container_item from "./container_item";

const Container = () => {
    return (
        <div class="container">
            <Container_item/>
            <Container_item/>
            <Container_item/>
            <Container_item/>
            <Container_item/>
        </div>
    )
}

export default Container;