import { Request, Response } from "express";
import {Contact} from "../types/contactTypes";

export const contactController =
    {
        submitContactForm: (req: Request, res: Response):void  => {
            try {
                const {email, subject, message} = req.body as Contact;

                if (!email || !subject || !message) {
                    res.status(400).json({
                        success: false,
                        error: 'All fields required/malformed request'
                    });
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(email)) {
                    res.status(400).json({
                        success: false,
                        error: 'Invalid email format'
                    });
                }
                console.log('Contact form submission received:', {email, subject, message});

                res.json({success: true, info: 'Successfully submitted contact'});
            } catch (error) {
                console.log(error, 'Malformed validation');
                res.status(500).json(
                    {
                        success: false,
                        info: 'Malformed validation',
                    }
                )
            }
        },
    }
