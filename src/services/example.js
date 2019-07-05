import request from '../utils/request';
import { stringify } from 'qs';



export async function getall(params) {
  return request(`edu/page/getall`,{
    method: 'get',
  })
}
//index_adv 
export async function getadv(params) {
  return request(`edu/page/getadv`,{
    method: 'get',
  })
}
//index aboutus
export async function getaboutus(params) {
  return request(`edu/page/getaboutus`,{
    method: 'get',
  })
}
//index service
export async function getservice(params) {
  return request(`edu/page/getservice`,{
    method: 'get',
  })
}
//work env
export async function getenv(params) {
  return request(`edu/about/getenv`,{
    method: 'get',
  })
}
