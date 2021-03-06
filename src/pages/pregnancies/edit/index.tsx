import React from 'react';
import Form from './components/form';
import styles from './index.less';
import request from '@/utils/request';
import { keyBy, get, reduce, concat } from 'lodash';
import { toApi, fromApi } from './config/adapter';
import { formDescriptionsFromApi, formDescriptionsWithoutSectionApi } from '@/utils/adapter';
import { message } from 'antd';
import WithDynamicExport from '@/components/WithDynamicExport';

export class Pregnancies extends React.Component {
  state = {
    data: {},
    formDescriptions: [],
    formDescriptionsWithoutSection: [],
  };

  async componentDidMount() {
    const { location } = this.props;
    const id = get(location, 'query.id');
    const formDescriptions = formDescriptionsFromApi(await request.get('/form-descriptions?moduleName=pregnant'));
    const formDescriptionsWithoutSection = formDescriptionsWithoutSectionApi(formDescriptions);
    const data = id ? fromApi(await request.get(`/pregnancies/${id}`), formDescriptionsWithoutSection) : {};
    this.setState({ formDescriptions, formDescriptionsWithoutSection, data });
  }

  handleSubmit = async values => {
    const { data, formDescriptionsWithoutSection } = this.state;
    const params = await toApi(
      {
        ...data,
        ...values,
      },
      formDescriptionsWithoutSection,
    );
    console.log(params);
    if (get(values, 'id')) {
      await request.put('/pregnancies', { data: params });
      message.success('修改病例成功');
    } else {
      await request.post('/pregnancies', { data: params });
      message.success('新增病例成功');
    }
  };

  render() {
    const { formDescriptions, formDescriptionsWithoutSection, data } = this.state;
    return (
      <div className={styles.pregnanciesPanel}>
        <Form
          key={get(data, 'id') || Math.random()}
          data={data}
          onFinish={this.handleSubmit}
          formDescriptions={formDescriptions}
          formDescriptionsWithoutSection={formDescriptionsWithoutSection}
        />
      </div>
    );
  }
}

export default WithDynamicExport(Pregnancies);
