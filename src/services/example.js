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
//develop
export async function getdevlop(params) {
  return request(`edu/about/getdevlop`,{
    method: 'get',
  })
}
//getachieve
export async function getachieve(params) {
  return request(`edu/about/getachieve`,{
    method: 'get',
  })
}

//getcourse
export async function getcourse(params) {
  return request(`edu/service/getcourse`,{
    method: 'get',
  })
}
//getcourse
export async function getschool(params) {
  return request(`edu/service/getschool`,{
    method: 'get',
  })
}

//getcourse
export async function getedu(params) {
  return request(`edu/service/getedu`,{
    method: 'get',
  })
}
//getcourse
export async function getcooperate(params) {
  return request(`edu/cooperate/getcooperate`,{
    method: 'get',
  })
}
































































