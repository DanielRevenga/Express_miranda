const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   }
});
// @ts-ignore
UserSchema.pre("save", async function (next) {
      const user = this;
      // @ts-ignore
      const hash = await bcrypt.hash(this.password, 10);
      // @ts-ignore
      this.password = hash;
      next();
   }
);

UserSchema.methods.isValidPassword = async function (password) {
   const user = this;
   // @ts-ignore
   const compare = await bcrypt.compare(password, user.password);

   return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;