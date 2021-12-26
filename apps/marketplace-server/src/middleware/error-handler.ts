const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');

const errorHandler = (err, req, res, next) => {
    const error = (err.status === 401 ||
        err instanceof APIError) ? err : new InternalServerError();

    if (process.env.NODE_ENV !== 'production') {
        // do something here
    }
    if (['ValidationError', 'UserExistsError'].includes(err.name)) {
        // if it is a special error
        return res.status(405).json(err);
    }
    // log error if needed
    // logger.info('API error', { error: err });

    return res // return 500 for user
        .status(error.status || 500)
        .json({
            code: error.code || 500,
            message: error.message || STATUS_CODES[error.status],
        });
};

module.exports = { errorHandler };