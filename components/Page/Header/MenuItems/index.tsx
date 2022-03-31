import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

interface MenuItemsProps {
  className?: string;
  navigation: object;
}

const MenuItems = ({ className, navigation }: MenuItemsProps) => {
  return (
    <Wrapper className={className}>
      {Object.entries(navigation).map(([id, item]) => (
        <Item key={item.href} href={item.href}>
          {item.label}
        </Item>
      ))}
    </Wrapper>
  );
};

export default MenuItems;