export const parseChunkHexToInt = (chunk) => parseInt(chunk.hex.replaceAll(' ', ''), 16);

export const getChunkHexSize = (chunk) => chunk.hex.replaceAll(' ', '').length / 2;
