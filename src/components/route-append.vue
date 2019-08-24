<template>
<div>
    <p>append
    类型: boolean

    默认值: false

    设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b

    </p>
    <p>
        tag
    类型: string

    默认值: "a"

    有时候想要 router-link> 渲染成某种标签，例如 li。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
    </p>
</div>
    
</template>
