import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

it('header 必须包含input', () => {
  // shallowMount是浅渲染
  // Mount是深渲染，在集成测试中会渲染树
  // wrapper:提供了组件的属性与dom的操作，方便去做断言
  const wrapper = shallowMount(Header);
  const input = wrapper.find("[data-test='input']");
  expect(input.exists()()).toBe(true);
});
