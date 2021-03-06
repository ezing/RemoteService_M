import React, { Fragment } from 'react';
import BaseQuery from '@/components/BaseQuery';
import { Input } from 'antd';
import { queryFormDescriptions as formDescriptions } from '../config/form';

export default class Query extends BaseQuery {
  renderEditItem = this.generateRenderEditItem(formDescriptions, {
    formItemLayout: this.formItemLayout,
  });

  renderContent = () => {
    return (
      <Fragment>
        {this.renderEditItem('id', <Input size="small" placeholder="请输入ID" />)}
        {this.renderEditItem('name', <Input size="small" placeholder="请输入名称" />)}
        {this.renderEditItem('module_name', <Input size="small" placeholder="请输入模块名称" />)}
      </Fragment>
    );
  };
}
