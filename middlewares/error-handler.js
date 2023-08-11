
const asyncErrorHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    }
    catch(error){
        console.log("Error in async error handler", error)
    }
    // await fn(req, res, next).catch((reason) => console.log("reason is", reason))

}

module.exports = asyncErrorHandler