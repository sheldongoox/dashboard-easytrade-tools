import React, { useContext } from 'react';
import ProList from '@ant-design/pro-list';
// import { extend } from 'umi-request';
import { Context } from "../index";

/*
const request = extend({
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic d2JhZG1pbjp3YmFkbWlu",
  }
});
*/
type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const infoMap = {
  0: {
    label: 'Definition Id', key: 'Definition Id',
  },
  1: {
    label: 'Instance State', key: 'Instance State',
  },
  2: {
    label: 'Deployment', key: 'Deployment',
  },
  3: {
    label: 'Definition Version', key: 'Definition Version',
  },
  4: {
    label: 'SLA Compliance', key: 'SLA Compliance',
  },
  5: {
    label: 'Correlation key', key: 'Correlation key',
  },
  6: {
    label: 'Parent Process Instance', key: 'Parent Process Instance',
  },
  7: {
    label: 'Active user tasks', key: 'Active user tasks',
  },
  8: {
    label: 'Current Activities', key: 'Current Activities',
  },
}

const InstanceDetails: React.FC = () => {
  const { state } = useContext(Context);
  const containerId = state.info.containerId;
  const processInstanceId = state.info.processInstanceId;
  console.log('state =', state);
  return <>
    <ProList<GithubIssueItem>
      // toolBarRender={null}
      search={{
        filterType: 'light',
      }}
      rowKey="name"
      headerTitle=""
      request={async (params = {}) => {
        /*
        request<{
          data: GithubIssueItem[];
        }>(`/api/server/containers/${containerId}/processes/instances/1/variables/instances`, {
          params,
        })*/
        return {}
      }
      }
      pagination={false}
      // showActions="hover"
      metas={{
        avatar: {
          dataIndex: 'avatar',
          search: false,
        },
        description: {
          dataIndex: 'title',
          search: false,
        }
      }}
    /></>
}

export default InstanceDetails;