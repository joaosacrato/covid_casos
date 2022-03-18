import { FaVirusSlash } from "react-icons/fa";

function Cabecalho() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FaVirusSlash size={32} />
            {` Covid Mundo`}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Cabecalho;
