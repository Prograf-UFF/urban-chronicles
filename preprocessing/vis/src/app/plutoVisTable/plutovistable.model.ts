export class PlutoVisTableModel {

    private _name: string;
    private _code: string;
    private _key: string;
    private _value: number;
    private _year: string;
    private _prevFound: boolean;
    private _valueBefore: number;
    private _valueAfter: number;

    constructor (year: string,
                name: string,
                code: string,
                key: string,
                value: number,
                found: boolean) {
        this._year = year;
        this._name = name;
        this._code = code;
        this._key = key;
        this._value = value;
        this._prevFound = found;
        this._valueBefore = 0;
        this._valueAfter = 0;
    }

    get valueBefore(): number {
        return this._valueBefore;
    }

    get valueAfter(): number {
        return this._valueAfter;
    }

    set valueBefore(valBefore: number) {
        this._valueBefore = valBefore;
    }

    set valueAfter(valAfter: number) {
        this._valueAfter = valAfter;
    }

    get prevFound(): boolean {
        return this._prevFound;
    }

    set prevFound(found: boolean) {
        this._prevFound = found;
    }

    get year(): string {
        return this._year;
    }
    set year(value: string) {
        this._year = value;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }
}
