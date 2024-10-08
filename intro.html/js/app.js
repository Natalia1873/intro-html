function saludar(){
    let texto = document.getElementById("txtDato").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");

    titulo.innerHTML = texto;

    parrafo.innerHTML = "Parrafo" + texto;

    titulo.style.color = '#obd04e';

    parrafo.style.backgroundColor = '#f231e1';
    //alert(texto);

}