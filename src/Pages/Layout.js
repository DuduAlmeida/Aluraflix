import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;


function Layout({ children }) {
  return (
    <>
      <Header />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default Layout;