import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { styled } from "styled-components";

const MainLayout = styled.main`
  flex: 1;
`;
const AppLayoutStyle = styled.main`
  height: 100%;
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 97%;
    margin-inline: auto;
  }
`;

function AppLayout() {
  return (
    <AppLayoutStyle>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AppLayoutStyle>
  );
}

export default AppLayout;
