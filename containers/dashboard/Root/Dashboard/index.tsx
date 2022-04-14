import { BoxProps } from "components/Box";
import Heading from "components/Heading";
import Section from "components/Section";
import styled from "styled-components";

import Content from "./Content";
import Sidebar from "./Sidebar";

const Wrapper = styled(Section)`
  display: flex;
  gap: 40px;
  padding: 40px;
  background: #f5f7fc;
  height: calc(100vh - 80px);
`;

interface DashboardProps extends BoxProps {}

const Dashboard = ({ className, ...props }: DashboardProps) => {
  return (
    <Wrapper className={className} label="Dashboard" {...props}>
      <Sidebar />
      <Content />
    </Wrapper>
  );
};

export default Dashboard;
