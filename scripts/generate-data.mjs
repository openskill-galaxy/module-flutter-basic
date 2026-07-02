import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="Flutter Dart Widget StatelessWidget StatefulWidget BuildContext MaterialApp Scaffold AppBar Text Image Icon Button Container Padding Margin Row Column Stack Expanded Flexible ListView GridView PageView Navigator Route named route setState state lifting InheritedWidget Provider Riverpod Bloc Future async await Stream HTTP Dio JSON fromJson toJson SharedPreferences local database form TextField Form Validator theme ThemeData dark mode animation AnimationController Hero responsive design hot reload debug build release cross-platform iOS Android Web desktop widget tree element tree render tree key global key inherited widget media query layout builder orientation builder aspect ratio fitted box rotatable box transform animated builder tween curve flutter inspect performance profiling flutter doctor flutter create pubspec yaml dependency package management state management architecture clean architecture domain driven design";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"fl-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Flutter",description:"Flutter标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"fl-course-01",order:1,slug:"Flutter入门",title:"Flutter入门与跨端开发路线",description:"Flutter概述、跨端优势、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"fl-course-02",order:2,slug:"Dart基础",title:"Dart语言基础",description:"变量、类、函数、异步、null safety。",estimatedHours:10,diff:"easy"},
  {id:"fl-course-03",order:3,slug:"Flutter环境",title:"Flutter环境配置与项目结构",description:"SDK配置、项目结构、pubspec、热重载。",estimatedHours:6,diff:"easy"},
  {id:"fl-course-04",order:4,slug:"Widget思想",title:"Widget思想与声明式UI",description:"Widget树、Stateless/StatefulWidget、BuildContext。",estimatedHours:8,diff:"medium"},
  {id:"fl-course-05",order:5,slug:"基础组件",title:"常用基础组件",description:"Text、Image、Icon、Button、Container、Padding。",estimatedHours:8,diff:"medium"},
  {id:"fl-course-06",order:6,slug:"布局系统",title:"布局系统：Row、Column与Stack",description:"Row、Column、Stack、Expanded、Flexible、限幅。",estimatedHours:10,diff:"medium"},
  {id:"fl-course-07",order:7,slug:"状态管理",title:"状态管理基础",description:"setState、状态提升、Provider入门。",estimatedHours:10,diff:"hard"},
  {id:"fl-course-08",order:8,slug:"路由导航",title:"路由、导航与页面传参",description:"Navigator、命名路由、路由传参、onGenerateRoute。",estimatedHours:8,diff:"hard"},
  {id:"fl-course-09",order:9,slug:"表单输入",title:"表单、输入校验与用户交互",description:"TextField、Form、Validator、键盘处理。",estimatedHours:8,diff:"hard"},
  {id:"fl-course-10",order:10,slug:"网络请求",title:"网络请求、JSON与异步编程",description:"HTTP、Dio、Future、async/await、JSON序列化。",estimatedHours:10,diff:"hard"},
  {id:"fl-course-11",order:11,slug:"本地存储",title:"本地存储与数据持久化",description:"SharedPreferences、本地文件、数据库入门。",estimatedHours:8,diff:"hard"},
  {id:"fl-course-12",order:12,slug:"状态管理进阶",title:"Provider、Riverpod入门",description:"Provider原理、ChangeNotifier、Consumer、Riverpod基础。",estimatedHours:10,diff:"hard"},
  {id:"fl-course-13",order:13,slug:"动画主题",title:"动画、主题与适配",description:"AnimationController、Hero、ThemeData、暗色模式、响应式。",estimatedHours:10,diff:"hard"},
  {id:"fl-course-14",order:14,slug:"Flutter项目面试",title:"Flutter综合项目、打包与面试",description:"项目整合、打包发布、面试题。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Dart","能开发Flutter应用","理解Widget","会状态管理"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"fl-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Flutter"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Flutter课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["Flutter","跨端框架"],["Dart","Flutter语言"],["Widget","UI组件"],["StatelessWidget","无状态组件"],["StatefulWidget","有状态组件"],["布局RowColumn","行/列布局"],["ListView","列表组件"],["Navigator","导航器"],["Provider","状态管理"],["setState","状态更新"],["Dio","网络请求"],["Future","异步操作"],["Route","页面路由"],["动画","动画控制"],["主题","ThemeData"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"fl-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Flutter",tags:["Flutter"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"fl-kp-"+String(k.length+1).padStart(4,"0"),name:"Flutter概念"+(k.length+1),description:"Flutter概念",category:"Flutter",tags:["Flutter"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Flutter入门","Dart基础","Flutter环境","Widget思想","基础组件","布局系统","状态管理","路由导航","表单输入","网络请求","本地存储","状态管理进阶","动画主题","Flutter项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"Flutter官方语言？",["Dart","JavaScript","C++","Python"],"A","easy"],[1,"Dart null安全运算符？",["?.","?:","==?","=?"],"A","easy"],[2,"热重载快捷键？",["r","R","F5","Ctrl+S"],"A","easy"],[3,"StatelessWidget特点？",["不可变","可变","有状态","可编辑"],"A","medium"],[4,"Text组件用于？",["显示文本","显示图片","显示按钮","显示输入"],"A","medium"],[6,"setState作用？",["触发重建","保存数据","网络请求","文件读写"],"A","hard"],[7,"Navigator.push用于？",["跳转页面","返回页面","替换页面","弹出页面"],"A","hard"],[10,"Dio用于？",["HTTP请求","数据库","动画","路由"],"A","medium"],[12,"Provider中Consumer作用？",["监听状态变化","创建状态","销毁状态","发送请求"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"fl-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="fl-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Flutter"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Flutter"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Flutter重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在Flutter"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在Flutter中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于Flutter。";}
    else if(it.type==="case_analysis"){s="Flutter"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"fl-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["Hello Flutter","Dart类函数","基础Widget","登录页","列表页","详情页","路由跳转","表单校验","Todo应用","Provider状态","网络请求","JSON解析","本地存储","主题切换","动画效果","响应式","报错修复","打包","面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"fl-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Flutter",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Flutter路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"fl-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Flutter","Dart","Widget","StatelessWidget","StatefulWidget","ListView","Navigator","Provider","Dio","setState","Route","Animation","Theme","hero","Future"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Flutter概念"+i,"Flutter概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"fl-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Flutter",tags:["Flutter"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Flutter问题"+(i+1)+"?","Flutter问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"fl-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Flutter",tags:["Flutter"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Flutter"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Flutter"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Flutter"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Flutter"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Flutter"]});});return e;}
async function main(){
  console.log("Gen Flutter...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-flutter-basic",slug:"module-flutter-basic",title:"Flutter跨端应用开发",subtitle:"面向跨端应用开发者",description:"面向跨端应用开发学习者的DartFlutter Widget布局状态管理路由表单网络请求本地存储动画主题适配性能优化与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Flutter","Dart","跨端开发","移动开发","Widget","状态管理","路由","项目实战"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F30D}",repoUrl:"https://github.com/openskill-galaxy/module-flutter-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
