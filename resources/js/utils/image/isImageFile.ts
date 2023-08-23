export function isImageFile(file: any) {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    return types.includes(file.type);
}
