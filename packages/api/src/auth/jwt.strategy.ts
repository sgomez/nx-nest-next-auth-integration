import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import UserEntity from './user.entity';
import nextAuthExtractor from './utils/next-auth-extractor';

interface JwtPayload {
  sub: string;
  email: string;
}

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([nextAuthExtractor]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload): Promise<UserEntity> {
    return { id: payload.sub, email: payload.email };
  }
}
