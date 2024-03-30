import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext.jsx";
import { theme } from "../../../../../theme/index.jsx";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed } = useContext(AdminContext);

  return (
    <AdminTabsStyled>
      <Tab
        Icon={!isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : ""}
      />

      <Tab
        Icon={<AiOutlinePlus />
      }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : ""}
        label="Ajouter un produit"
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 22px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    border-color: ${theme.colors.background_dark};
  }
  button{
    margin-left: 1px;
  }
`;
