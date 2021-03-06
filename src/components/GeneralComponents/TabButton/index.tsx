import React, { useRef } from 'react';
import styles from './index.less';
import { CloseCircleOutlined } from '@ant-design/icons';

interface IProps {
  isActive?: boolean;
  title: string;
  tabKey: string;
  closable?: boolean;
  onClick?: any;
  onClose?: any;
}

export default (props: IProps) => {
  const { isActive = false, closable = true, title, onClick, onClose, tabKey } = props;
  let tabRef = useRef();

  const handleClickTab = () => {
    onClick && onClick(tabKey);
    tabRef.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const handleCloseTab = (e: any) => {
    e.stopPropagation();
    onClose && onClose(tabKey);
  };

  const iconStyle = isActive
    ? {
        backgroundColor: '#1890ff',
      }
    : {};

  return (
    <div
      id={tabKey}
      ref={rcNode => {
        tabRef = rcNode;
      }}
      className={styles.customTabsButton}
      onClick={handleClickTab}
    >
      <div className={styles.customTabsButtonIcon} style={iconStyle}></div>
      <div className={styles.customTabsButtonTitle}>{title}</div>
      {closable && (
        <div className={styles.customTabsButtonClose} onClick={handleCloseTab}>
          <CloseCircleOutlined />
        </div>
      )}
    </div>
  );
};
