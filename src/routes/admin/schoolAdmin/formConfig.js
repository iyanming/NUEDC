/**
 * Created by out_xu on 17/6/28.
 */

import { verify } from '../../../utils'

const editConfig = [
  {
    value: 'name',
    label: '姓名',
    formType: 0,
    contentType: 'string',
    rules: {
      required: true,
      requiredMessage: '请输入您的用户昵称',
      pattern: /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/,
      patternMessage: '2-20位英文字母、汉字、数字'
    }
  }, {
    value: 'sex',
    label: '性别',
    formType: 1,
    contentType: 'string',
    rules: {
      required: true,
      requiredMessage: '请选择性别'
    },
    options: [{'label': '男', 'value': '男'}, {'label': '女', 'value': '女'}]
  }, {
    value: 'email',
    label: '邮箱',
    formType: 0,
    contentType: 'string',
    rules: {
      required: false,
      requiredMessage: '请输入邮箱',
      pattern: verify.mail,
      patternMessage: '请输入合法的邮箱'
    },
    hasFeedback: false
  }
]

const createConfig = [
  {
    value: 'name',
    label: '姓名',
    formType: 0,
    contentType: 'string',
    rules: {
      required: true,
      requiredMessage: '请输入您的用户昵称',
      pattern: /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/,
      patternMessage: '2-20位英文字母、汉字、数字'
    }
  }, {
    value: 'sex',
    label: '性别',
    formType: 1,
    contentType: 'string',
    rules: {
      required: true,
      requiredMessage: '请选择性别'
    },
    options: [{'label': '男', 'value': '男'}, {'label': '女', 'value': '女'}]
  }, {
    value: 'email',
    label: '邮箱',
    formType: 0,
    contentType: 'string',
    rules: {
      required: false,
      requiredMessage: '请输入邮箱',
      pattern: verify.mail,
      patternMessage: '请输入合法的邮箱'
    },
    hasFeedback: false
  }, {
    value: 'mobile',
    label: '手机号',
    formType: 0,
    contentType: 'string',
    rules: {
      required: true,
      requiredMessage: '请输入您的手机',
      pattern: verify.mobile,
      patternMessage: '输入合法的手机号码'
    }
  }, {
    value: 'password',
    label: '密码',
    formType: 0,
    placeholder: 'NUEDC2017',
    extra: '默认密码 NUEDC2017，不使用默认密码请输入',
    contentType: 'string',
    rules: {
      required: false,
      requiredMessage: '请输入您的密码',
      pattern: verify.password,
      patternMessage: '6-18位数字、英文字母或者下划线'
    }
  }
]

export { editConfig, createConfig }
