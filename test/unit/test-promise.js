export default class TestPromise {
  constructor() {
    this.resolvers = new Set();
    this.rejecters = new Set();
  }

  then(onResolve, onReject) {
    if (onResolve) {
      this.resolvers.add(onResolve);
    }
    if (onReject) {
      this.rejecters.add(onReject);
    }
  }

  catch(onReject) {
    if (onReject) {
      this.rejecters.add(onReject);
    }
  }

  resolve(result) {
    this.resolvers.forEach(resolver => resolver(result));
  }

  reject(error) {
    this.rejecters.forEach(rejecter => rejecter(error));
  }
}
