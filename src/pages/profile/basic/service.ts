import request from '@/utils/request';

export async function queryBasicProfile() {
  return request.get('/profile/basic');
}
