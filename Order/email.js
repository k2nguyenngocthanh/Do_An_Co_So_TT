function sendMail(){
    var params={
        email:document.getElementById("email").value,

        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        address:document.getElementById("address").value,
        message:document.getElementById("message").value,

    };
    const serviceID ="service_o309o8h";
const templateID="template_tk3j9nr";
    emailjs.send(serviceID,templateID,params).then(
        res=>{
            document.getElementById("email").value="";

            document.getElementById("name").value="";
            document.getElementById("phone").value="";
            document.getElementById("address").value="";
            
            document.getElementById("message").value="";
      

            alert("bạn đã đặt hàng thành công");
        }
    )
    .catch((err)=>console.log(err));
}
