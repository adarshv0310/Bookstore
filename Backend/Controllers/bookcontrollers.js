import bookmodel from "../Models/bookmodel.js";



export const getBook = async(req, res) => {


    try {
        const book = await bookmodel.find();
        res.status(200).json(book)

    } catch {
        console.log("Error", error);
        res.status(500).json(error);
    }
}