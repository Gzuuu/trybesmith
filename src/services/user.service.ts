import UserModel from "src/database/models/user.model";
import { ServiceResponse } from "../types/serviceResponse";

type LoginServiceResponse = ServiceResponse<{ token: string }>;

export async function login(username: string, password: string): Promise<LoginServiceResponse> {
    const user = await UserModel.findOne({ where: { username }});

    if (!user || user.dataValues.password !== password) {
        return {
            status: 'UNAUTHORIZED',
            data: {
                message: 'invalid username or password',
            }
        }
    }
    const token = 'a';

    return {
        status: 'SUCCESSFUL',
        data: {
            token,
        },
    };
};

export default {
    login,
};