const jwt = require("jwt-simple");
const appSecrets = require("../config/secret");
const User = require("../models").Users;


module.exports = {
   authenticate (req, res, next) {
         // Look for a token.
          var token = req.headers['access-token'] || req.query.access_token;
          // If they didn't provide a token, send them away.
          if (!token) {
            return res.status(401).send({
              message: "Must be authenticated to use this route."
            });
          }

          // Try to decode the token.
          try {
            var decoded = jwt.decode(token, appSecrets.jwtSecret);
            var userId = decoded.id;
            // If decoding the token was successful,
            // look up the user from the token Id.
            User.findById(userId).then(user => {

              // If no matching user was found, send them away.
              if (!user) {
                return res.status(401).send({ message: "Error during authentication." });
              }

              // Otherwise, attach the user to the request object.
              req.user = user;
              next();
            });

          } catch (e) {
            console.log(e);
            // Token was garbage. Tell 'em so.
            return res.status(401).send({ message: "Invalid token." });
          }
   }
};
