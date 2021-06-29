export class HeatMapModel {
  private _group;
  private _variable;
  private _value;

  get group() {
    return this._group;
  }

  set group(_group) {
    this._group = _group;
  }

  get variable() {
    return this._variable;
  }

  set variable(_variable) {
    this._variable = _variable;
  }

  get value() {
    return this._value;
  }

  set value(_value) {
    this._value = _value;
  }
}