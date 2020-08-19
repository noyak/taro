<template>
  <view class='index'>
      <AtList>
        <AtListItem title='标题文字' :onClick="handleClick" />
        <AtListItem title='标题文字' arrow='right' />
        <AtListItem title='标题文字' extraText='详细信息' />
        <AtListItem title='禁用状态' disabled extraText='详细信息' />
        </AtList>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
export default {
  name: 'Test',
  methods: {
    handleClick (item, index) {
      console.log('click');
    },
  }
}
</script>