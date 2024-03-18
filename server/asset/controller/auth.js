import User from "../modal/User.js";
export const login = async(req, resp, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        resp.status(200).send(user);
    } catch (e) {
        resp.send(e)
    }
}

export default login