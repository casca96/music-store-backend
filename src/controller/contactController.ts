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
        getContactInfo: (req: Request, res: Response):void => {
            try {
                const contactInfo = {
                    address: "Address 1234",
                    phone: "+ 381 61 11 22 3344",
                    email: "info@musicstore.com",
                    hours: "Monday-Friday: 9am-7pm, Saturday: 10am-5pm, Sunday: Closed"
                };

                res.json(contactInfo);
            } catch (error) {
                console.error('Error retrieving contact info:', error);
                res.status(500).json(
                    {success: false, info: 'Error getting contactInfo'});
            }
        }
    }
