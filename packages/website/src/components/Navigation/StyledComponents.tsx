import styled from '@emotion/styled'

export const StyledNav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: var(--nav-background-color);
  border-radius: 5px;

  > div,
  > a,
  > img {
    align-self: center;
    margin-right: 20px;
  }

  > div:last-child {
    margin-right: 0px;
  }
`

export const StyledSubmenu = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 100;

  > p {
    margin: 10px 0px;
  }

  > div {
    position: absolute;
    min-width: 300px;
    background-color: var(--nav-background-color);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    > a {
      display: block;
      padding: 5px;
    }
  }
`

interface SubmenuItemsProps {
  show: boolean
}
export const SubmenuItems = styled.div<SubmenuItemsProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`
