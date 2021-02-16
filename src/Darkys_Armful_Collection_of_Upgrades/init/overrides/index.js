const overrides = () => {
 const style = document.createElement('style');
 style.textContent = '.darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}';
 document.head.appendChild(style);

 Game.crate = new Function(
  `return ${Game.crate
   .toString()
   .split("classes+=' upgrade';")
   .join("classes+=' upgrade';\nif (me.darky === 1) classes+=' darky';//Darky's upgrade package injection")}`,
 )();
};

export default overrides;
