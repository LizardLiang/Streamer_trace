import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1rem;
`;

export const Body = styled.div`
  width: 100vw;

  flex-grow: 1;

  background-color: var(--secondary-color);

  padding: 0 25rem;
  padding-top: 2rem;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.div`
  width: 100vw;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .title {
    font-size: 2rem;
  }

  .info {
    font-size: 1rem;
  }

  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: var(--primary-color);

  color: var(--primary-text-color);

  position: relative;
`;
