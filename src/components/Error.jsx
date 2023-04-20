import styled from "@emotion/styled"

const Texto = styled.p`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

function Error ({children}) {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error