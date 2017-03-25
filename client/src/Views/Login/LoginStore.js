import {observable, computed, action} from "mobx";

export default class LoginStore {
    @observable users = [];
    @action.bound
    initializeDummyData() {
        this.users = [{
          id: 1,
          cwid: "gfiiq",
          password: "gfiiq"
        },
        {
          id: 2,
          cwid: "ghlxx",
          password: "ghlxx"
        },
        {
          id: 3,
          cwid: "asdf",
          password: "asdf"
        },
        {
          id: 4,
          cwid: "gfiiq",
          password: "gfiiq"
        },
        {
          id: 5,
          cwid: "gfiiq",
          password: "gfiiq"
        }
        ];
    }
}
