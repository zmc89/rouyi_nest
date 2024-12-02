import { IsString } from 'class-validator';


export class LoginResDto {
    @IsString()
    accessToken: string;
    @IsString()
    refreshToken: string;
}

export class CaptChaResDto {
    @IsString()
    img: string;
    @IsString()
    uuid: string;
}
