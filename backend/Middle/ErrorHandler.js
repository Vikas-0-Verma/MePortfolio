class ErrorHandler extends Error {
    constructor(message, statuscode){
        super(message)
        this.status = statuscode;

        Error.captureStackTrace(this, this.constructor)
    }
    
}

export default ErrorHandler