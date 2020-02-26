
import {get, post} from '../common/client';

const doctorClient =  {
  createWorkList(departmentId: string | number) {
    return get('/doctor/createWork',{
      departmentId
    })
  }

};

export default doctorClient;