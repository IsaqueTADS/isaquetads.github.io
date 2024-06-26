function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var htano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (htano.value.length == 0 || Number(htano.value) > ano) {
    alert("[ERRO] houve um erro!! Digite novamente os dados!");
  } else {
    var htsex = document.getElementsByName("radsex");
    var idade = ano - Number(htano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (htsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 12) {
        //criança
        res.innerHTML = `<p>Detectamos um criança masculina com ${idade} anos. <br><p>`;
        img.setAttribute("src", "foto_bebe_H.png");
        document.body.style.background = "#a9ffa3";
      } else if (idade > 12 && idade < 21) {
        //Jovem
        img.setAttribute("src", "foto_jovem_H.png");
        res.innerHTML = `<p>Detectamos um cavalheiro com ${idade} anos.<br></p>`;
        document.body.style.background = "#a9ffa3";
      } else if (idade >= 21 && idade < 60) {
        //adulto
        img.setAttribute("src", "foto_adulto_H.png");
        res.innerHTML = `<p>Detectamos um cavalheiro com ${idade} anos.<br></p>`;
        document.body.style.background = "#a9ffa3";
      } else {
        //idoso
        img.setAttribute("src", "foto_idoso_H.png");
        res.innerHTML = `<p>Detectamos um senhor com ${idade} anos.<br> </p>`;
        document.body.style.background = "#a9ffa3";
      }
    } else if (htsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade <= 12) {
        //criança
        img.setAttribute("src", "foto_bebe_M.png");
        res.innerHTML = `<p>Detectamos um criança feminina com ${idade} anos.<br></p>`;
        document.body.style.background = "#d4a3ff";
      } else if (idade > 12 && idade < 21) {
        //Jovem
        img.setAttribute("src", "foto_jovem_M.png");
        res.innerHTML = `<p>Detectamos uma bela dama com ${idade} anos.<br></p>`;
        document.body.style.background = "#d4a3ff";
      } else if (idade >= 21 && idade < 60) {
        //adulto
        res.innerHTML = `<p>Detectamos uma bela dama com ${idade} anos.<br></p>`;
        img.setAttribute("src", "foto_adulto_M.png");
        document.body.style.background = "#d4a3ff";
      } else {
        //idoso
        img.setAttribute("src", "foto_idoso_M.png");
        res.innerHTML = `<p>Detectamos uma senhora com ${idade} anos.<br></p>`;
        document.body.style.background = "#d4a3ff";
      }
    }
  }
  res.style.textAlign = "center";

  res.appendChild(img);
}
