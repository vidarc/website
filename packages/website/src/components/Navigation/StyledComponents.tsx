import styled from '@emotion/styled'

export const StyledNav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #666666;
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

  hr {
    margin: 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  > p {
    margin: 10px 0px;
  }

  > div {
    position: absolute;
    min-width: 300px;
    background-color: #666666;
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
export const SubmenuItems = styled.div`
  display: ${(props: SubmenuItemsProps) => (props.show ? 'block' : 'none')};
`
