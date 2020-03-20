import React from 'react';
import { Button } from 'antd';
import { get, isEmpty } from 'lodash';
import PermissionSelect from '@/components/selects/PermissionSelect';
import styles from './index.less';

export default class MenuPermissionCard extends React.PureComponent {
  handleSaveMenu = () => {
    console.log('save menu');
  };

  render() {
    const { role } = this.props;

    return (
      <div className={styles.menuPermissionCard}>
        <div className={styles.menuPermissionCardHeader}>
          <div>菜单/权限</div>
          <Button
            type="primary"
            size="small"
            onClick={this.handleSaveMenu}
            disabled={isEmpty(role)}
          >
            保存
          </Button>
        </div>
        <div>
          <PermissionSelect value={get(role, 'permissions')} defaultExpandAll={false} />
        </div>
      </div>
    );
  }
}
