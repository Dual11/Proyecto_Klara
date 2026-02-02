export default function rule9TwoNumbers(password) {
  const count = (password.match(/\d/g) || []).length;
  if (count < 2) {
    return { ok: false, message: "Quiero 2 números. Uno no vale." };
  }
  return { ok: true, message: "2 números ok. Vas subiendo." };
}
