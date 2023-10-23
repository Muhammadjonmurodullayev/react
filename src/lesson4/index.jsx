import React from "react";
class lesson extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // inputvalyu:"",
            // name:"uz",
            html:false,
            css:false,
            js:false
        }

    }
    render(){
        const hendil=(lang)=>{
switch(lang){
    case"uz": return "o'zbek";
    case"ru": return "rus";
    case"en": return "ingliz";

}
        }
        return(
            <div>
                {/* <input type="text" onChange={(v)=>this.setState({inputvalyu:v.target.value})}/>
                <p>{this.state.inputvalyu}</p> */}
                {/* <select onChange={(v)=> this.setState({name:v.target.value}) }>
                    <option value="uz">uz</option>
                    <option value="ru">ru</option>
                    <option value="en">Ingliz</option>
                </select>
                <p>Foydalanuvchi {hendil(this.state.name)} tilini tanladi</p> */}
                <label style={{display:"block"}} >
                    <p>Siz qaysilarini bilasz?</p>
                 HTML<input  type="checkbox" onChange={(v)=>this.setState({html: v.target.checked })} />
                </label>
                <label  style={{display:"block"}}>
                    {/* <p>Siz qaysilarini bilasz</p> */}
                 Css<input  type="checkbox" onChange={(v)=>this.setState({css: v.target.checked })} />
                </label >
                <label style={{display:"block"}}>
                    {/* <p>Siz qaysilarini bilasz</p> */}
                 Js<input  type="checkbox" onChange={(v)=>this.setState({js: v.target.checked })}/>
                </label>
                <p>Foydalanuvchi {this.state.html&&"HTML"} {this.state.css&&"SCC"} {this.state.js&&"JS"} biladi</p>
            </div>
        )
    }
}
export default lesson