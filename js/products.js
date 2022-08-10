
      function changeProductList(type,element)
      {
          let tabs = document.getElementsByClassName('tab-item');
          for(i=0;i<tabs.length;i++)
          {
              tabs[i].style.background='black';
              tabs[i].style.color='white';
          }
          element.style.background='white';
          element.style.color='black';
          document.getElementById(type).style.display='block';
      
           switch(type){
            case 'kid':
                document.getElementById('brush').style.display='none';
                document.getElementById('tooth').style.display='none';
                document.getElementById('elec').style.display='none';
                document.getElementById('all').style.display='none';
                break;
            case 'brush':
                document.getElementById('kid').style.display='none';
                document.getElementById('tooth').style.display='none';
                document.getElementById('elec').style.display='none';
                document.getElementById('all').style.display='none';
                break;
            case 'tooth':
                document.getElementById('kid').style.display='none';
                document.getElementById('brush').style.display='none';
                document.getElementById('elec').style.display='none';
                document.getElementById('all').style.display='none';
                break;       
            case 'elec':
                document.getElementById('kid').style.display='none';
                document.getElementById('brush').style.display='none';
                document.getElementById('tooth').style.display='none';
                document.getElementById('all').style.display='none';
                    break; 
            case 'all':
                document.getElementById(type).style.display='block';
                    break;                
            }
        }