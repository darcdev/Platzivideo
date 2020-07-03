const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const { config } = require('../../../config/index');
const UsersService = require('../../../services/users');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      const userService = new UsersService();
      try {
        const user = userService.getUser({ email: tokenPayload.email });
        if (!user) {
          return cb(boom.unauthorized(), false);
        }
        return cb(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
