/*우주선*/ 
class Hero {
    constructor(container, src, x, y, width, height) {
        this.container=container;
        this.img;
        this.x=x;
        this.y=y;
        this.velX=0; //우주선의 속도: 최초에는 움직이지 않아야하므로
        this.velY=0;
        this.width=width;
        this.height=height;
        this.src=src;

        //우주선의 스타일 속성
        this.img=document.createElement("img"); 
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    //우주선 움직이기
    move(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}