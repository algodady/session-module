import jwt from 'jsonwebtoken'
import { User } from '../../models/user.model.js';

export const getData = async (req, res) => {
    const result = [{
        "id": 1,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
    }, {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
    }, {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
    }, {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
    }];
    res.status(200).json({ message: 'Information successfully fetch !!', data: result })
}


export const registration = async (req, res) => {
    try {
        console.log(req.body);
        const {name , email} = req.body

        await User.create({
            name,
            email
        })
        res.status(200).json({ message: "Successfully registered !!" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong !!" })
    }
}

export const login = async (req, res) => {
    try {
        const token = jwt.sign({ id: 1, role: "algodaddy" }, process.env.SECRET_KEY);
        return res
            .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.MODE === "production",
            })
            .status(200)
            .json({ message: "Logged in successfully 😊 👌" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong !!" })
    }
}

export const logout = async (req, res) => {
    try {
        return res
            .clearCookie("access_token")
            .status(200)
            .json({ message: "Successfully logged out 😏 🍀" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong !!" })
    }
}

export const authcheck = async (req, res) => {
    try {

        return res.json({ user: { id: req.userId, role: req.userRole } });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong !!" })
    }
}