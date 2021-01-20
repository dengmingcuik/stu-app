import axios from 'axios';
import urls from './URL';
const appkey = 'duxingzhe_1553994650506';
const size = 5;
const myAxios = axios.create({
  baseURL: urls.baseURL,
  method: 'get',
  params: {
    appkey
  }
});

export default {
  findByPage(page) {
    return myAxios({
      url: urls.findByPage,
      params: {
        page,
        size
      }
    })
  },
  updateStu(stu) {
    return myAxios({
      url: urls.updateStu,
      params: {
        ...stu
      }
    })
  },
  delStuBySNo(sNo) {
    return myAxios({
      url: urls.delStuBySNo,
      params: {
        sNo
      }
    })
  },
  searchStu(search, page) {
    return myAxios({
      url: urls.searchStu,
      params: {
        sex: -1,
        search,
        page,
        size
      }
    })
  },
  addStu(data) {
    return myAxios({
      url: urls.addStu,
      params: {
        ...data
      }
    })
  }
}