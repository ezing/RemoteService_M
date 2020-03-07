import { map, get, keyBy } from 'lodash';
import { formatTimeToStandard } from '@/utils/format';
import { orderStatusMapping } from '../components/OrderTypeSelect';

export const payTypeMapping = [
  {
    code: 'WX',
    name: '微信',
  },
  {
    code: 'alipay',
    name: '支付宝',
  },
];

export const processFromApi = (data: any) => {
  const payTypes = keyBy(payTypeMapping, 'code');
  return map(data, item => {
    return {
      ...item,
      username: get(item, 'pregnancy.name'),
      telephone: get(item, 'pregnancy.telephone'),
      paytypeString: get(payTypes, `${get(item, 'paytype')}.name`),
      pregnancyId: get(item, 'pregnancy.id'),
      submitTime: formatTimeToStandard(get(item, 'createtime')),
      orderStatus:
        get(keyBy(orderStatusMapping, 'value'), `${get(item, 'paystate')}.title`) || '未知',
    };
  });
};