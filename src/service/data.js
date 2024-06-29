import axios from "axios";

export const getNotes = async () => {
    try {
        const response = await axios.get("https://fernandafamiliar.soy/wp-json/wp/v2/posts");
        return {
            status: "ok",
            data: response,
        };
    } catch (error) {
        return {
            status: "bad",
            msg: error,
        };
    }
};
