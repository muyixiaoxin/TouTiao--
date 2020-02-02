import request from '@/utils/request'
export const getUserChannels = () => {
  return request({
    methold: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
