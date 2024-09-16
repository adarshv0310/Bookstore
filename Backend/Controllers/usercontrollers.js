import User from '../Models/usermodel.js'
//import bcryptjs from 'bcrypt'

export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "User already exist" })

        }

        //const hashPassword = bcryptjs.hash(password, 10);

        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: password
        })

        await createdUser.save();
        res.status(201).json({ message: "User created sucessfully" })
    } catch (error) {
        console.log("Error" + error.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
};


export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        //const isMatch = await compare(password, user.password);

        if (!user || user.password != password) {
            return res.status(400).json({ message: "Invalid username `or password" })
        } else {
            res.status(200).json({
                message: "Login successfull",
                user: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })

        }
    } catch (error) {
        console.log("Error " + error.message);
        return res.status(500).json({ message: "Internal server error" })
    }
};