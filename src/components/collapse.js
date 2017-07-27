import React from 'react';
import { Collapse } from 'antd';
import {demoData} from '../config/data_config.js'
const Panel = Collapse.Panel;


// const demoData = [
//   ['控制div属性','网页换肤','函数接受参数并弹出','用循环将div变色','鼠标移入移出改变样式','记住密码提示框'],
//   ['百度输入法','点击div显示innerHTMl','求数组的和','弹出层效果','函数传参改变div属性值','图片列表，改变div透明度','简易选项卡','简易年历','单一按钮显示/隐藏-播放列表的收缩展开','提示框效果','鼠标移入修改路径','复选框：全选/不选/反选'],
//   ['用parseInt解析数字，并求和','累加按钮，自加1','输入两个数字，比较大小','页面加载后累加，自加1','判断数字是否为两位数','网页计算器','简易网页时钟','倒计时时钟（100秒）'],
//   ['setTimeout应用','自动播放一幻灯片效果','自动改变方向一幻灯片效果','agruments应用一求出函数参数的总合','css函数一设置/读取对象的属性','当前输入框高亮显示','数组练习：各种数组方法的使用','事件练习：封装兼容性添加、删除事件的函数','星级评分系统'],
//   ['模拟select控件','点击页面，显示单击的坐标','用户按下键盘，显示keyCode','阻止右键菜单（阻止默认事件）','跟随鼠标移动（大图展示）','自定义右键菜单','用键盘控制Div']
// ];
export default class CollapseDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

 

  handleClick = (group,index,ev) =>{
    window.open("/src/asset/demos/js_demo/lesson-"+group+"/demo"+group+"."+index+".html");
  }

  componentDidMount() {
    this.setState({data:demoData});
  }

  render(){
    
     
    return(
      <Collapse style={{ width: 420 }} defaultActiveKey={['1']}>
        {
          this.state.data.map((item,index) => {
            return(
              <Panel header={"练习组-"+(index+1)} key={index+1}>
                {
                  this.state.data[index].map((e,i) => {
                    return(
                       <p onClick={this.handleClick.bind(this,index+1,i+1)} className="jsDemoLink">{(i+1)+"-"+e}</p>
                    )
                  })
                }
              </Panel>
            )
          })
        }      
      </Collapse>
    )
  }
  
}
