const { Router } = require("express")
const router = Router();

const movies = require("../../sample.json");

router.get("/", (req, res) => {
    res.json(movies);
    return
});

router.post("/", (req, res) => {
    const body = req.body
    const newMovie = {
        id: movies.length + 1,
        ...body
    }
    movies.push(newMovie)
    res.status(200).json({message: "Your Movie was succesfully saved"})
    return 
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    
    let index = movies.findIndex((movie) => movie.id == id)

    if (index === -1) {
        res.status(404).json({message: `Movie record with id ${id} was not found`})
        return
    } else {
        movies.splice(index, 1)
        res.status(200).json({message: `Your movie was with ${id} was succesfully deleted`})
        return
    }
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;

    let index = movies.findIndex((movie) => movie.id ==id)

    if (index == -1) {
        res.status(404).json({message:`No movie id ${id} was found on the database`})
    } else {
        const newMovie = {
            id: index + 1,
            ...body
        }
        movies.splice(index, 1, newMovie)
        res.status(200).json({message: `Your movie was with ${id} was succesfully updated`})
    }
})



module.exports = router;