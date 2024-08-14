import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { Doctor } from '../models/doctorModel.js'

const signup = async (req, res) => {
    try {
        const userExists = await User.findOne({
            email: req.body.email
        })

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
      