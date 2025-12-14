import { MyNavbar } from "./Komponen/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './assets/banner.png';
import './Style/style.scss'
import { Button, Container } from "react-bootstrap";
import { About } from "./Komponen/About";

const Porto = () => {

    return (
        <div>
            <MyNavbar />

            <br />
            <h1 className="title text-center">PORTOFOLIO</h1>
            <h1 className="title text-center">✦ 2025 ✦</h1>
            <br />

            <Container>
                <div className="d-flex mb-5 gap-5 justify-content-center mx-auto align-items-center">
                    <div className="col-3 p text-end">
                        <p className="title">UI/UX</p>
                        <p>Informatics Student | Fullstack Developer | UIX Designer</p>
                    </div>

                    <div className="flex-fill d-flex justify-content-center">
                        <img className="img-fluid" src={banner} alt="banner" />
                    </div>

                    <div className="col-3 p">
                        <div className="d-flex gap-1 d-flex align-items-end">
                            <p className="title">4.5</p>
                            <p className="mb-5" style={{ color: "grey" }}>/5 rate</p>
                        </div>
                        <div>
                            <p>Saya suka membangun web interaktif dan game sederhana dengan fokus pada UI & logic.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <br />

            <About />
        </div>
    )
}

export default Porto