import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

class Store {
  data = [];
  categoriesApi = [];
  minutes = [];
  blocks = [];

  constructor() {
    makeAutoObservable(this);
  }

  getData() {
    axios
      .all([
        axios.get('https://rpback.com/api/games/test_categories?project_id=2'),
        axios.get('https://rpback.com/api/games/test_minutes?project_id=2'),
        axios.get('https://rpback.com/api/games/test_blocks?project_id=2'),
      ])
      .then((responseArr) => {
        runInAction(() => {
          this.data = responseArr;
          this.categoriesApi = responseArr[0].data;
          this.minutes = responseArr[1].data;
          this.blocks = responseArr[2].data;
        });
      });
  }
}
export default new Store();
