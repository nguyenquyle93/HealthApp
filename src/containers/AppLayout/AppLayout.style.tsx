import styled from "styled-components";
import theme from "../../theme/index";
import { Layout, Dropdown, FloatButton } from "antd";
const { Header, Footer } = Layout;
const { BackTop } = FloatButton;

const Wrapper = styled.div`
  width: 100%;
`;

const HeaderContainer = styled(Header)`
  background-color: ${theme.colors.dark500} !important;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 160px !important;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .footer-link {
    padding: 0 30px;
    color: ${theme.colors.light};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      color: ${theme.colors.primary400};
    }
  }
  .app-icon {
    height: 40px;
  }
  .icon {
    height: 26px;
    padding-right: 10px;
  }
`;

const FooterContainer = styled(Footer)`
  background-color: ${theme.colors.dark500} !important;
  height: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 160px !important;
  .footer-link {
    padding: 0 30px;
    color: ${theme.colors.light};
  }
`;

const DropdownMenu = styled(Dropdown)`
  cursor: pointer;
  .ant-dropdown-menu-root {
    border-radius: 0 !important;
    background-color: ${theme.colors.gray} !important;
  }
`;

const BackButton = styled(BackTop)`
  border: 1px solid ${theme.colors.gray};
`;
export { Wrapper, HeaderContainer, FooterContainer, DropdownMenu, BackButton };
