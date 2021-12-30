import React from "react";
import "./App.css";
import { Stream } from "./streams/stream";
import { Container, Header, Body, BodyContainer } from "./styles/MainStyled";

const Divider: React.FC = () => {
  return (
    <div className="custom-shape-divider-bottom-1640841063">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
};

const streamers = [
  {
    name: "owowowowowoow0",
    type: "twitch",
  },
  {
    name: "ttv_bolin",
    type: "twitch",
  },
];

function App() {
  return (
    <Container>
      <Header>
        <p className="title">Streamer Tracer</p>
        <p className="info">
          This is a tool to trace streamers I like is streaming or not
        </p>
        <Divider />
      </Header>
      <Body>
        <BodyContainer>
          {streamers.map((val, index) => {
            return <Stream key={val.name} type={val.type} name={val.name} />;
          })}
        </BodyContainer>
      </Body>
    </Container>
  );
}

export default App;
