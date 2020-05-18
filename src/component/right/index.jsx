import React from 'react'
import './index.less'
import { Table, Select, Button, Pagination, Input } from 'react-ryui'
class Right extends React.Component {
  data = [{
    key: Math.random(),
    no: 1,
    title: '三国演义',
    role: 1,
    writer: '罗贯中',
    count: 1,
    edit: false
  }, {
    key: Math.random(),
    no: 2,
    title: '水浒传',
    role: 2,
    writer: '施耐庵',
    count: 2,
    edit: false
  }, {
    key: Math.random(),
    no: 3,
    title: '红楼梦',
    role: 3,
    writer: '曹雪芹',
    count: 3,
    edit: false
  }, {
    key: Math.random(),
    no: 4,
    title: '西游记',
    role: 4,
    writer: '吴承恩',
    count: 4,
    edit: true
  }]
  state = {
    data: JSON.parse(JSON.stringify(this.data)),
    role: -1,
    dataList: [{
      key: Math.random(),
      value: 0,
      label: '已发布'
    }, {
      key: Math.random(),
      value: 1,
      label: '唱未发布',
    }]
  }

  render() {
    const colmun = [{
      label: '文章序号',
      dataIndex: 'no',
      render: (value, record) => {
        return <Button
          dark
          style={{ width: 30 }}
          label={value}
        />
      }
    }, {
      label: '文章标题',
      title: '用户管理',
      dataIndex: 'title'
    }, {
      label: '作者',
      dataIndex: 'writer'
    }, {
      label: '上传时间',
      dataIndex: 'count',
      sorter: (a, b) => {
        return a.count > b.count ? 1 : -1
      }
    }, {
      label: '发布状态',
      dataIndex: 'edit',
      render: (edit, record) => {
        return <Button
          dark
          type={edit ? "primary" : 'normal'}
          style={{ width: 50, marginRight: 10 }}
          label={edit ? '已发布' : '未发布'}
          onClick={
            () => {
              alert('123')
            }
          }
        />
      }
    }, {
      label: '操作',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return ['删除', '修改'].map(m => {
          return <Button
            dark
            style={{ width: 50, marginRight: 10 }}
            label={m}
            onClick={
              () => {
                alert('123')
              }
            } />
        })
      }
    }]
    return (
      <div className='app-right' style={{ justifyContent: 'flex-start' }}>
        <div className='right-header'>
          <div className='header-top'>
            <Input
              dark
              addonBefore='文章ID'
              style={{ width: 200 }}
              placeholder='请输入'
              value={this.state.value}
              onChange={
                (e) => {
                  this.setValue(e.target.value)
                }
              }
            />
            <Input
              dark
              addonBefore='作者'
              style={{ width: 200 }}
              placeholder='请输入'
              value={this.state.value}
              onChange={
                (e) => {
                  this.setValue(e.target.value)
                }
              }
            />
            <Input
              dark
              addonBefore='文章标题'
              style={{ width: 200 }}
              placeholder='请输入'
              value={this.state.value}
              onChange={
                (e) => {
                  this.setValue(e.target.value)
                }
              }
            />
            <Select
              clear
              dark
              style={{ width: 200 }}
              placeholder="请选择"
              dataList={this.state.dataList}
              onChange={
                (e) => {
                 this.setValue(e)
                }
              }
            />
            <Button
              dark
              label={
                <i className="iconfont icon-search" />
              }
              type='primary'
              style={{ marginLeft: 20, width: 50, height: 30 }}
              onClick={
                () => {
                  alert('123')
                }
              }
            />
          </div>
          <div className='header-bottom'>
            <Button
              dark
              label='删除'
              type='primary'
              style={{ width: 50, marginLeft: 20 }}
              onClick={
                () => {
                  alert('123')
                }
              }
            />
            <Button
              dark
              label='添加'
              type='primary'
              style={{width: 50,  marginLeft: 20 }}
              onClick={
                () => {
                  alert('123')
                }
              }
            />
          </div>
        </div>
        <div className='right-body'>
          <Table
            dark
            data={this.state.data}
            colmun={colmun}
          />
        </div>
        <div className='right-bottom'>
          <Pagination
            dark
            current={3}
            pageSize={10}
            total={60}
            onChange={
              (e) => {
                console.log(e)
              }
            }
          />
        </div>
      </div>
    )
  }
}
export {
  Right
}