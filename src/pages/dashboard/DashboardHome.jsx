import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import Stats from "../../dashboard/components/home/Stats";
import SalesChart from "../../dashboard/components/home/SalesChart";
import OrderChart from "../../dashboard/components/home/OrderChart";

const HomeWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
`;
const ChartsContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap:wrap;
  gap: 4rem;
`;

function DashboardHome() {
  return (
    <HomeWrapper>
      <Stats />
      <ChartsContainer>
        <SalesChart />
        <OrderChart />
      </ChartsContainer>
    </HomeWrapper>
  );
}

export default DashboardHome;
