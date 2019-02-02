export const isNotEmpty = query =>
    query !== undefined && query !== null ? query : false;

export const isANumber = str =>
    !/\D/.test(str) && str !== undefined && str != null ? str : 1;
