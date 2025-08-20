export function isUrl(string) {
    try {
        new URL(string);
        return true;
    } catch {
        return false;
    }
}