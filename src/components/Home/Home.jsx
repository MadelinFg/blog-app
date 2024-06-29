import { useEffect, useState } from "react";

import NoteCard from "../NoteCard/NoteCard";
import SpinnerComponent from "../Spinner/Spinner";

import { getNotes } from "../../service/data";

import "./Home.css";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [showNotes, setShowNotes] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"));

        if (items) {
            items.lenght > 0 ? setNotes(items) : getNotesInfo();
        } else {
            getNotesInfo();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(notes));
    }, [notes]);

    const getNotesInfo = () => {
        setShowSpinner(true);

        setTimeout(async () => {
            const items = await getNotes();

            if (items.status === "ok") {
                setShowNotes(true);
                setNotes(items.data.data);
            } else {
                setShowNotes(false);
            }
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
