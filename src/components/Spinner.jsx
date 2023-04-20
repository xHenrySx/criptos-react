import "../styles/Spinner.css"
import styled from "@emotion/styled";

const Contenedor = styled.div`
  margin: 100px auto;
`;
function Spinner() {
  return (
    <Contenedor className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </Contenedor>
  );
}

export default Spinner;
