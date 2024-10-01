//logic1
/*const asyncHandler = (fn) => aync (req, res, newxt) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 404).json({
            success: false,
            message : error.message
        })
    }
}*/

//logic2
const asyncHandler= (requestHandler)=>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error)=> next(err))
    }
}
export  {asyncHandler}