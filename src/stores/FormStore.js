import { observable } from 'mobx';

export default new class FormStore {
  @observable username;
  @observable header

  constructor() {
    this.username = '';
    this.header = '{Username}';
  }

  inValue = (e) => {
    console.log(e);
    this.username = e.target.value; 
  }

  inHeader = (e) => {
    e.preventDefault();
    this.header = this.username;
  }

}