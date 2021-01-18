import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

const Header = styled.h1`
  text-align: center;
  color: #ffffff;
  background: #333333;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px, #ff2d95 0px 0px 20px,
    #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px, #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props extends RouteComponentProps {}

const Mashin: React.FunctionComponent<Props> = () => (
  <>
    <Header>MASHIN</Header>
    <Container>
      <iframe
        title="mashin"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  </>
)

export default Mashin
