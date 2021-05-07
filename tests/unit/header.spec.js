import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

it('header 必须包含input', () => {
  // shallowMount是浅渲染
  // Mount是深渲染，在集成测试中会渲染树
  // wrapper:提供了组件的属性与dom的操作，方便去做断言
  const wrapper = shallowMount(Header);
  const input = wrapper.find("[data-test='input']");
  expect(input.exists()).toBe(true);
});

it('input 的初始值必须是空', () => {
  const wrapper = shallowMount(Header);
  // vm代表着组件的实例，$data代表着数据
  const { inputValue } = wrapper.vm.$data;
  expect(inputValue).toBe('');
});

it('input 的值会发生变化', () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find("[data-test='input']");
  // 给组件设置值
  input.setValue('abc');
  const { inputValue } = wrapper.vm.$data;
  expect(inputValue).toBe('abc');
});

it('input内容为空时，Enter键不触发事件,不为空是触发事件', () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find("[data-test='input']");
  input.setValue('');
  // 收到模拟触发事件
  input.trigger('keyup.enter');
  // emitted是否触发事件
  expect(wrapper.emitted().add).toBeFalsy();
});

it('Enter键触发事件后，input内容清空', () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find("[data-test='input']");
  input.setValue('abc');
  input.trigger('keyup.enter');
  expect(wrapper.vm.$data.inputValue).toBe('');
});
