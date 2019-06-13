import request from '../utils/request';
import { stringify } from 'qs';



export async function getall(params) {
  return request(`edu/page/getall`,{
    method: 'get',
  })
}
