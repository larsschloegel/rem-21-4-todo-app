import styled from "styled-components/macro"

export default function Header(props) {
  return (
    <StyledHeader>
      <StyledHeaderTitle> To-Do-App</StyledHeaderTitle>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`
const StyledHeaderTitle = styled.h1`
  margin-left: 12px;
`
