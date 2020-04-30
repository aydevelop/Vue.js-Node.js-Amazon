function wrapper(f) {
    return async function() {
        try {
            return await f.apply(this, arguments);
        } catch(e) {
            arguments[1].json({
                success: false,
                message: e.message
            });
        }
    }
}

module.exports = wrapper;