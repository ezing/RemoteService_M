import React from 'react';
import { Modal, Input, Form, Spin, InputNumber } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import { get } from 'lodash';

export default class DeviceBackModal extends React.Component {
  formRef = React.createRef<FormInstance>();

  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit();
  };

  render() {
    const { visible, onCancel, orderInfo, deviceInfo } = this.props;
    return (
      <Modal
        visible={visible}
        destroyOnClose
        title="回收设备"
        okText="确认"
        onCancel={onCancel}
        onOk={this.handleSubmit}
      >
        <Form ref={this.formRef}>
          <Form.Item label="用户姓名" name="username">
            <span>{get(orderInfo, 'pregnancy.name')}</span>
          </Form.Item>
          <Form.Item label="联系方式" name="contactType">
            <span>{get(orderInfo, 'pregnancy.telephone') || '--'}</span>
          </Form.Item>
          <Form.Item label="设备类型" name="type">
            <span>{get(orderInfo, 'type') || '--'}</span>
          </Form.Item>
          <Form.Item label="设备编号" name="erpno" required>
            <span>{get(deviceInfo, 'erpno') || '--'}</span>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}