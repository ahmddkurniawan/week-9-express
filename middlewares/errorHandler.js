const errorHandler = (err, req, res, next) => {
    
    if(err.name === "Invalid") {
        res.Status(400).json({massage: "wrong email or password"})
 } else {
        res.status(500).json({massage: "server error"})
    }
}

module.exports = errorHandler