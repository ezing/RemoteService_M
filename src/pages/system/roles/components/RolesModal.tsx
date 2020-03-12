import generateModalForm from '@/components/BaseModalForm';
import { modalFormDescriptions as formDescriptions } from '../config/form';

export default generateModalForm({
  formDescriptions,
  url: 'groups',
  title: '角色',
  fixedFormParams: { type: 'CTGAPPLY' },
  modalProps: {
    width: 500,
  },
  formItemLayout: {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  },
});
