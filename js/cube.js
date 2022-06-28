(($, window, document, undefined)=>{

  class obj {
      init(){
        this.mainMethod();
      }
      mainMethod(){

        let degVal = 0;

        let front = "0,0,0,0"
        let back = "0,1,0,-180"
        let left = "0,1,0,-90"
        let right = "0,1,0,90"
        let top = "1,0,0,-90"
        let bottom = "1,0,0,90"

        let xDeg = "1,0,0"+","+degVal;
        let yDeg = "0,1,0"+","+degVal; 
        let xyDeg = "1,1,0"+","+degVal; 

        $('.face').each(function(index){
          $(this).on({
            click:function(){
              changeFn(index);
            }
          });
        });

        $('#deg').on({
          change:function(){
            degVal = $(this).val();
            changeFn();
            if($('#xDeg').is(":checked")){
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+xDeg+'deg)'});
            }
            if($('#yDeg').is(":checked")){
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+yDeg+'deg)'});
            }
            if($('#xyDeg').is(":checked")){
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+xyDeg+'deg)'});
            }
            return;
          }
        });

        function changeFn(index){

          xDeg = "1,0,0"+","+degVal;
          yDeg = "0,1,0"+","+degVal;
          xyDeg = "1,1,0"+","+degVal; 

          switch(index){
            case 0:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+front+'deg)'});
              break;
            case 1:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+back+'deg)'});
              break;
            case 2:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+left+'deg)'});
              break;
            case 3:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+right+'deg)'});
              break;
            case 4:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+top+'deg)'});
              break;
            case 5:
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+bottom+'deg)'});
              break;
            case 6: 
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+xDeg+'deg)'});
              break;
            case 7: 
              $('.cube').css({'transform':'perspective(800px)'});
              $('.cube').css({'transform':'rotate3d('+yDeg+'deg)'});
              break;
          }
        }

      }

      
  }
  const newObj = new obj();
  newObj.init();


})(jQuery, window, document);