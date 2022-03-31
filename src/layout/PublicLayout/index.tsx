import { Outlet } from "react-router-dom";

import { Content } from "./styles";

export const PublicLayout = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};
