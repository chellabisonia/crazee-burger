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

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsEditTabSelected(false);
      setIsAddTabSelected(true);
    }

    if (tabSelected === "edit") {
      setIsEditTabSelected(true);
      setIsAddTabSelected(false);
    }
  };

  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddTabSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditTabSelected ? "is-active" : "",
    },
  ];
  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
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
