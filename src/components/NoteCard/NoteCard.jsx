import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./NoteCard.css";

const NoteCard = ({ title, imgSrc, date, modifiedDate, resume, link }) => {
    const createdDate = new Date(date).toLocaleDateString();
    const createdTime = new Date(date).toLocaleTimeString();

    const modifDate = new Date(modifiedDate).toLocaleDateString();
    const modifTime = new Date(modifiedDate).toLocaleTimeString();

    return (
        <div className="note-card">
            <Card>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{ __html: title }}></Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                        Fecha: {createdDate} {createdTime}
                    </Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted">
                        Modificación: {modifDate} {modifTime}
                    </Card.Subtitle>

                    <p dangerouslySetInnerHTML={{ __html: resume }}></p>

                    <Button variant="secondary" href={link} target="_blank">
                        Ver nota
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NoteCard;
