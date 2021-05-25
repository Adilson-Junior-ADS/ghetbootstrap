$(document).ready(
    function(){
        
        $.ajax({
            url: 'http://192.168.10.94.:9000/users',
            type:'GET' ,
            seccess:function(data){
                $.each(data, function(i, user){
                    $('#table').append(
                    '<tr>',
                        ' <td>'+i+'</td>',
                       ' <td>'+user.guuid+'</td>',
                        '<td>'+user.name+'</td>',
                        '<td>'+user.cpf+'</td>',
                        '<td>'+user.ocupation+'</td>',
                    '</tr>' 
                    )   
                    
                })
            }
        })
    }
)