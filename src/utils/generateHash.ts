import bcrypt from "bcryptjs";

function generateHash(textToHash : string) {
  const salt = bcrypt.genSaltSync(parseInt(import.meta.env.VITE_SALT_ROUNDS));
  const hash = bcrypt.hashSync(textToHash, salt);

  return hash
}

export default generateHash;