import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // shallowMount是浅渲染
    // Mount是深渲染，在集成测试中会渲染树
    // wrapper:提供了组件的属性与dom的操作，方便去做断言
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// let root = document.createElement('div')
// root.className = 'root'
// document.body.appendChild(root)
// // new Vue({
// //   render: h=> h(HelloWorld,{
// //     props:{msg:'abc'}
// //   })
// // }).$mount('.root')
// console.log(document.getElementsByClassName('hello').length)
// expect(document.getElementsByClassName('hello').length).toBe(1)
