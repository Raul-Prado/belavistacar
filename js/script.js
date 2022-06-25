function evento(element)
    {
    	var id = element.getAttribute('data-id');
        if(id != undefined && id != null && id != '')
        {
        	var dad = document.getElementById(id).parentNode;
            var children = dad.children;
            for(var x=0; x<children.length; x++)
			{
            	if(children[x].id == id)
                {
                	if(children[x].classList.contains('selected') == false)
                    {
                    	children[x].classList.add('selected');
                    }
                }
                else
                {
                	if(children[x].classList.contains('selected') == true)
                    {
                    	children[x].classList.remove('selected');
                    }
                }
            }
        }
    }


// variaveis btn
// let sobreNos = document.getElementById("about");
// let produtoAs = document.getElementById("product");
// let orcamentoAs = document.getElementById("budget");
// // variaveis divs
// let divSobre = document.getElementById("sobrenos");
// let divProduto = document.getElementById("nosprod");
// let divOrcamento = document.getElementById("orcamento");
// // funções
// function AsAbout(a){
//     a.preventDefault();
//     // divSobre.style.removeProperty("display");
//     if(divSobre.style.display === 'none'){
//         divSobre.style.display="block";
//     }
//     else{
//         divSobre.style.display="none";
//     }
// }
// function AsProducts(b){
//     b.preventDefault();
//     // divProduto.style.removeProperty("display");
//     if(divProduto.style.display === 'none'){
//         divProduto.style.display="block";
//     }else{
//         divProduto.style.display='none';
//     }
// }
// function AsOrcamentos(c){
//     c.preventDefault();
//     // divOrcamento.style.removeProperty("display");
//     if(divOrcamento.style.display === 'none'){
//         divOrcamento.style.display="block";
//     }else{
//         divOrcamento.style.display="none";
//     }
// }
// // ocultar
// function Ocultar(){
//     var validar=true;
//     if(!validar){
//         divSobre = document.getElementById("sobrenos").style.display="none";
//         divProduto = document.getElementById("nosprod").style.display="none";
//         divOrcamento = document.getElementById("orcamento").style.display="none";
//         validar=false;
//     }else{
//         divSobre = document.getElementById("sobrenos").style.display="block";
//         divProduto = document.getElementById("nosprod").style.display="block";
//         divOrcamento = document.getElementById("orcamento").style.display="block";
//         validar=true;
//     }
// }
// sobreNos.addEventListener("click", AsAbout);
// produtoAs.addEventListener("click", AsProducts);
// orcamentoAs.addEventListener("click", AsOrcamentos);