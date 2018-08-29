webpackJsonp([43],{1757:function(n,t){n.exports={content:["article",["p","The scaffold of Ant Design Pro provides a set of ",["a",{title:null,href:"http://pro.ant.design/components"},"default components"],", which abstract common block in admin interfaces. We will continue to maintain and iterate these components to provide a higher level of abstraction than Ant Design for admin interfaces."],["h2","Usage"],["p","The components in the scaffold of Ant Design Pro are divided into two types:"],["ul",["li",["p","antd components: ",["a",{title:null,href:"https://ant.design/docs/react/introduce"},"https://ant.design/docs/react/introduce"]]],["li",["p","pro built-in components: ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/tree/master/src/components"},"https://github.com/ant-design/ant-design-pro/tree/master/src/components"]]]],["p","For scaffolding users, you can import/add/reform pro's built-in components directly. Please refer to ",["a",{title:null,href:"/docs/new-component"},"new components"]," for specific usage."],["p","For users without using scaffold, we provide a way to use pro's built-in components."],["blockquote",["p","Default components will be published to ",["a",{title:null,href:"http://npmjs.com/ant-design-pro"},"ant-design-pro"]," in npm's repository."]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-pro@1.x --save'},["code","$ npm install ant-design-pro@1.x --save"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'ant-design-pro/dist/ant-design-pro.css\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Import whole style</span>'},["code","import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style"]],["p","Then you can import pro's components like Ant Design."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Result <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Result\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import Result from 'ant-design-pro/lib/Result';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"]],["blockquote",["p","Note that pro's components is dependent on antd@3.0 by default and you need to ensure consistency with antd\u2018s version."]],["h2","Document & FeedBack"],["p","You can find all components, demos and API documents on ",["a",{title:null,href:"http://pro.ant.design/components"},"the components' page"],"."],["p","Components \bwill continue to iterate with the scaffold's update. If you have any questions and demands, you can feed back ",["a",{title:null,href:"http://github.com/ant-design/ant-design-pro/issues"},"here"],"."],["ul",["li",["p","Latest Version\uff1a",["a",{title:null,href:"http://npmjs.com/ant-design-pro"},["img",{title:null,src:"https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square",alt:"ant-design-pro"}]]]],["li",["p",["a",{title:null,href:"/docs/changelog"},"Change Log"]]]]],meta:{order:16,title:"Use Pro Components Alone",type:"Advanced",filename:"docs/use-components-alone.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#Document-&-FeedBack",title:"Document & FeedBack"},"Document & FeedBack"]]]}}});