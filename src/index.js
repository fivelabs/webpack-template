import { Example } from './example';

export default class Main extends Example {

  static sayHelloBuddy() {
    return this.sayHello('Buddy');
  }

}