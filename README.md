# PART3. 模块1 作业

## 一、简答题

### 1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么？

```js
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})
```

答：不是，vue实例在初始化的时候，通过Observer类的walk()方法递归遍历了data对象的属性，然后通过defineReactive()方法将每个属性设置成响应式的。上述代码中，直接向对象中定义新增属性仅仅实现了了新增属性而已，并没有生成对应属性的getter/setter，所以并没有实现数据的响应式。想要解决则必须要实现新增属性的defineReactive()方法，解决方案：

```js
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {
    // 方案一：在原对象处初始化name
    name: ''
  }
 },
 method: {
  clickHandler () {
   // 方案二：使用$set方法
   this.$set(this.dog, 'name', 'Trump')
  }
 }
})
```

解决方案一，在初始化的新增name属性，使name在walk方法执行时就被设置成响应式的；

解决方案二，调用Vue.$set方法，将name属性设置为响应式，并发送通知数据变化。