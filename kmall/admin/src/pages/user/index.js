/*
 * @Author: Chris
 * @Date:   2019-10-23 09:40:06
 * @Last Modified by:   Chris
 * @Last Modified time: 2019-10-28 17:22:06
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Table } from 'antd'

import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'

const dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [{
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '是否管理员',
        dataIndex: 'isAdmin',
        key: 'isAdmin',
        render:(isAdmin)=>(isAdmin ? '是' : '否')
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];

class User extends Component {
    constructor(props) {
        super(props)
    }
    ComponentDidMount() {
        this.props.handlePage(1)
    }
    render() {
        const { list } = this.props
        const arr = list.map((user)=>{
            return {
                key:user.get('_id'),
                username:user.get('username'),
                isAdmin:user.get('isAdmin'),
                phone:user.get('phone'),
                email:user.get('email'),
                createdAt:user.get('createdAt')
            }
        }).toJS()
        return (
            <div className="User">
            <Layout>
                <Breadcrumb style={{ margin:'16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>用户列表</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </Layout>
        </div>
        );
    }
}


//映射属性到组件
const mapStateToProps = (state) => ({
    list:state.get('user').get('list')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
    handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)