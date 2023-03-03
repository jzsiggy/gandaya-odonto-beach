import request from "./request";

export default class Service {
  static ping() {
    return request({
      url: "/auth/ping",
      method: "GET"
    });
  }

  static getEventList() {
    return request({
      url: "/event/all",
      method: "GET"
    });
  }
}

export default Service;