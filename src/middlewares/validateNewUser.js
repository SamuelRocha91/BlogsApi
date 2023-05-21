module.exports = (req, res, next) => {
    const { email, password, displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json(
            { message: '"displayName" length must be at least 8 characters long' },
          );
        }
        if (password.length < 6) {
            return res.status(400).json(
                { message: '"password" length must be at least 6 characters long' },
              );
            }
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]/i;

    if (!emailRegex.test(email)) {
            return res.status(400).json(
                { message: '"email" must be a valid email' },
              );
    }
     return next();
   };