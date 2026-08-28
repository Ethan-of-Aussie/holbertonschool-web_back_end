export default function createInt8TypedArray(length, position, value){
const buffer = new ArrayBuffer(length);
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    const data = new DataView(buffer);
    data.setInt8(position, value);
    return data;
}