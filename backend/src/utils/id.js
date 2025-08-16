export function gerarId(tamanho = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < tamanho; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}