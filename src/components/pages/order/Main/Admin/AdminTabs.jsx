import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme/index.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  } = useContext(OrderContext);
  
  const selectEditTab = () => {
    setIsCollapsed(false);
    setIsEditTabSelected(true);
    setIsAddTabSelected(false);
  };

  const selectAddTab = () => {
    setIsCollapsed(false);
    setIsEditTabSelected(false);
    setIsAddTabSelected(true);
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />

      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={selectAddTab}
        className={isAddTabSelected ? "is-active" : ""}
      />

      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={selectEditTab}
        className={isEditTabSelected ? "is-active" : ""}
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
  button {
    margin-left: 1px;
  }
`;
