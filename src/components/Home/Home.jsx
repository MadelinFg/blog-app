import { useEffect, useState } from "react";

import NoteCard from "../NoteCard/NoteCard";
import SpinnerComponent from "../Spinner/Spinner";

import "./Home.css";
import { getNotes } from "../../service/data";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [showNotes, setShowNotes] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        getNotesInfo();
    }, []);

    const getNotesInfo = () => {
        setShowSpinner(true);

        setTimeout(async () => {
            const items = await getNotes();

            items.status === "ok" ? setNotes(items.data.data) : setShowNotes(false);

            setShowSpinner(false);
        }, 1000);
    };

    return (
        <div className="home">
            <div className="head">
                <h1 className="title">Blog</h1>
            </div>
            <div className="home-inner-container">
                {showSpinner ? (
                    <SpinnerComponent />
                ) : (
                    <div className="cards-container">
                        {showNotes ? (
                            <div className="note-cards-container">
                                {notes.map((item, key) => {
                                    return (
                                        <NoteCard
                                            key={key}
                                            title={item.title.rendered}
                                            imgSrc={item.jetpack_featured_media_url}
                                            date={item.date}
                                            modifiedDate={item.modified}
                                            resume={item.excerpt.rendered}
                                            link={item.link}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <h4 className="error-txt">
                                Oops, ocurrió un error al mostrar las notas, por
                                favor intenta más tarde.
                            </h4>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
