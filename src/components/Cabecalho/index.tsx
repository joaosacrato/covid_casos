import { FaVirusSlash } from "react-icons/fa";
import "./style.css";

function Cabecalho() {
  return (
    <nav className="navbar navbar-light ">
      <div className="container-fluid ">
        <a className="item-nav navbar-brand " href="#">
          <FaVirusSlash className="" size={32} />
          {` Covid Mundo`}
        </a>
      </div>
    </nav>
  );
}

export default Cabecalho;
