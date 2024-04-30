/* eslint-disable quotes */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  const DataView = {};
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  DataView.byteLength = int8View.byteLength;
  DataView.byteOffset = int8View.byteOffset;
  DataView.buffer = buffer;

  return DataView;
}
