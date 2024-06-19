import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-green-100);
`;

function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  );
}

export default Header;
