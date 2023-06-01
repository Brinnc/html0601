//3) 요일을 정의함
class DateBox{
    constructor(container, x, y, txt, bg){
        this.container=container;
        this.div;
        this.x=x;
        this.y=y;
        this.txt=txt;
        this.bg=bg;

        this.div=document.createElement("div");
        this.div.style.width=100+"px";
        this.div.style.height=100+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.innerText=this.txt;
        this.div.style.border="2px solid gray";
        this.div.style.boxSizing="border-box";
        this.div.style.background=this.bg;

        this.div.style.fontSize=20+"px";

        this.container.appendChild(this.div);

    }
}