function wrapper(f) {
    return async function() {
        try {
            return await f.apply(this, arguments);
        } catch(e) {
            console.log(e);
            arguments[1].status(500).json({
                success: false,
                message: e.message
            });
        }
    }
}

module.exports = wrapper;