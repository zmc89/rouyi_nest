import { IsString } from 'class-validator';


export class LoginReqDto {
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    code: string;
    @IsString()
    uuid: string;
}
