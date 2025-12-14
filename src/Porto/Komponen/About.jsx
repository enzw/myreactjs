import { Button, Container } from "react-bootstrap"


const About = () => {

    return (
        <Container className="d-flex p-5 justify-content-between px-5"
            style={{
                background: "white"
            }}>
            <h1 className="sub-title">About Enzo</h1>

            <div className="col-6 d-flex flex-column align-items-end">
                <p className="big-p text-end">
                    Mahasiswa Informatika dengan minat di Fullstack Development, UI/UX, dan Game Development.
                </p>

                <div className="d-flex gap-3">
                    <Button variant="primary">Get in touch</Button>
                    <Button variant="outline-primary">Projects</Button>
                </div>
            </div>

        </Container>

    )
}

export { About }