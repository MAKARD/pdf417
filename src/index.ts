import { PDF417 as PDF417JS } from './PDF417';

const PDF417 = PDF417JS as {
    readonly ROWHEIGHT: 4;
    readonly QUIETH: 2;
    readonly QUIETV: 2;
    init: (code: string, ecl: number, aspectratio: number) => void;
    getInputSequences: (code: string) => Array<[number, string]>;
    getCompaction: (mode: 900 | 901 | 924 | 902 | 913, code: string, addmode?: boolean) => Array<number>;
    getErrorCorrectionLevel: (ecl: number, numcw: number) => number;
    getErrorCorrection: (cw: Array<number>, ecl: number) => Array<number>;
    getBarcodeArray: () => {
        num_cols: number;
        num_rows: number;
        bcode: Array<[number, string]>;
    };
};

export { PDF417 };

