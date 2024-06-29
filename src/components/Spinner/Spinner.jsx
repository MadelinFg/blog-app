import Spinner from "react-bootstrap/Spinner";

import './Spinner.css'

function SpinnerComponent() {
    return (
        <div className="spinner-container">
            <Spinner animation="border" />
        </div>
    );
}

export default SpinnerComponent;
