export default {
  dbs: "mongodb://127.0.0.1:27017/mt",
  redis: {
    get host() {
      // need ip when deploy project
      return "127.0.0.1";
    },
    get port() {
      return 6379;
    }
  },
  smtp: {
    get host() {
      // gmail: smtp.gmail.com
      return "smtp.gmail.com";
    },
    get user() {
      return "l597926159@gmail.com";
    },
    get pass() {
      // auth code
      return "loveisstrong5";
    },
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase();
      };
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000;
      };
    }
  }
};
