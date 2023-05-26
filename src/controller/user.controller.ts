import { Request, Response } from "express";
import userService from "../services/user.service";

const login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(422).json({ message: 'invalid data'});
    };

    const { status, data } = await userService.login(username, password);

    if (status === 'SUCCESSFUL'){
        return res.status(200).json({ token: data.token });
    };

    return res.status(400).json({ message: data.message });
};