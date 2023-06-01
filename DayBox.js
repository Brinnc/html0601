//2) 요일을 정의함
class DayBox{
    constructor(container, x, txt){
        //멤버변수
        this.div;
        this.x=x;
        this.txt=txt;
        this.container=container;
        //console.log(this.txt);

        this.div=document.createElement("div");
        this.div.style.width=100+"px";
        this.div.style.height=50+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        
        this.div.innerText=this.txt;
        this.div.style.textAlign="center";
        this.div.style.fontSize=25+"px";
        this.div.style.fontWeight="bold";
        this.div.style.border="2px solid grey";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div);
    }
}